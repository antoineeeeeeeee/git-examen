const { Builder, By, until } = require("selenium-webdriver");

async function runTest() {

  console.log("Starting E2E test...");

  const driver = await new Builder().forBrowser("chrome").build();

  try {

    await driver.get("http://localhost:3000");
    console.log("Site opened");

    // LOGIN
    const email = await driver.wait(until.elementLocated(By.id("email")), 10000);
    const password = await driver.findElement(By.id("password"));
    const loginButton = await driver.findElement(By.css("button[type='submit']"));

    await email.sendKeys("admin@test.com");
    await password.sendKeys("password");
    await loginButton.click();

    console.log("Login submitted");

    // attendre dashboard
    await driver.wait(until.urlContains("/dashboard"), 10000);
    console.log("Dashboard loaded");

    // ouvrir formulaire
    const newTaskButton = await driver.wait(
      until.elementLocated(By.css(".btn.btn-primary")),
      10000
    );

    await newTaskButton.click();
    console.log("Opened task form");

    // attendre input du formulaire
    const taskInput = await driver.wait(
      until.elementLocated(By.css("input")),
      10000
    );

    const taskName = "selenium-task";

    await taskInput.sendKeys(taskName);

    const submitButton = await driver.findElement(By.css("button[type='submit']"));
    await submitButton.click();

    console.log("Task created");

    // attendre apparition tâche
    await driver.sleep(2000);

    const pageText = await driver.findElement(By.tagName("body")).getText();

    if (!pageText.includes(taskName)) {
      throw new Error("Task not found");
    }

    console.log("Task found");

    console.log("E2E TEST SUCCESS");

  } catch (err) {

    console.error("TEST FAILED:", err);

  } finally {

    await driver.quit();

  }

}

runTest();