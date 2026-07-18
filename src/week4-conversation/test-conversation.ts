import { handleConversation } from "./conversation";

async function runTest(title: string, messages: string[]) {
  console.log("\n================================");
  console.log(title);
  console.log("================================");

  const userId = title;

  for (const message of messages) {
    console.log(`\n👤 User: ${message}`);

    const reply = await handleConversation(userId, message);

    console.log(`\n🤖 Agent:\n${reply}`);
  }
}

async function main() {
  await runTest("Test 1 - Multi-turn", [
    "Find homes in Irvine",
    "My budget is under 1.2 million",
    "I want 3 bedrooms",
    "Single family",
  ]);

  await runTest("Test 2 - One sentence", [
    "Find a 3 bedroom single family home in Irvine under 1.2 million",
  ]);

  await runTest("Test 3 - No results", [
    "Find homes in Irvine",
    "Budget 300000",
    "5 bedrooms",
    "Single family",
  ]);

  await runTest("Test 4 - San Jose", [
    "Find homes in San Jose",
    "Budget 2 million",
    "4 bedrooms",
    "Townhouse",
  ]);
}

main().catch(console.error);