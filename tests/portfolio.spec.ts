import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [320, 390, 768, 1440]) {
  test(`읽기·이동·접근성 ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
    await page.evaluate(() => document.fonts.ready);
    await expect(page).toHaveTitle(/주세원.*DX Engineer/);
    await expect(page.locator("h1")).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByRole("button", { name: "프로젝트 확인" }).click();
    await expect(page.locator("#projects")).toBeFocused();
    await expect(page.locator("#projects")).toBeInViewport();
    await page.getByRole("button", { name: "연락처", exact: true }).first().click();
    await expect(page.locator("#contact")).toBeFocused();
    await expect(page.locator("#contact")).toBeInViewport();
    await expect(page.getByRole("button", { name: "연락처", exact: true }).first()).toHaveAttribute("aria-current", "location");
    await expect(page.locator('a[href=""], a[href="#"]')).toHaveCount(0);
    for (const anchor of await page.locator("a").all()) {
      await expect(anchor).toHaveAttribute("target", "_blank");
      await expect(anchor).toHaveAttribute("rel", /noopener/);
    }
    await page.getByRole("button", { name: "맨 위로" }).click();
    await expect(page.locator("#top")).toBeFocused();
    await page.screenshot({ path: `test-results/portfolio-${width}.png`, fullPage: true });
    const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(accessibility.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("키보드로 본문 건너뛰기", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "본문으로 건너뛰기" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});

test("프로젝트 상세 모달 열기와 닫기", async ({ page }) => {
  await page.goto("/");
  const projectCard = page.getByRole("button", { name: "Japanese OCR Improvement 상세 보기" });
  await projectCard.click();

  const dialog = page.getByRole("dialog", { name: "Japanese OCR Improvement" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("OCR 모델 개발 및 제품 연동")).toBeVisible();
  await expect(dialog.getByText("17.03% → 93.61%", { exact: true })).toBeVisible();
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
  await expect(page.getByRole("button", { name: "프로젝트 상세 닫기" })).toBeFocused();
  await page.screenshot({ path: "test-results/project-modal-desktop.png", fullPage: false });

  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(projectCard).toBeFocused();

  await page.getByRole("button", { name: "Document Structure Recognition 상세 보기" }).click();
  await page.locator(".modal-overlay").click({ position: { x: 5, y: 5 } });
  await expect(page.getByRole("dialog")).not.toBeVisible();
});

test("모바일 프로젝트 모달은 한 열로 표시", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "ClassLog 상세 보기" }).click();
  await expect(page.getByRole("dialog", { name: "ClassLog" })).toBeVisible();
  expect(await page.locator(".modal-content-grid").evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length)).toBe(1);
  await page.screenshot({ path: "test-results/project-modal-mobile.png", fullPage: false });
});
