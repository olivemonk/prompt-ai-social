import { connectToDB } from "@utils/database";
import Prompt from "@models/Prompt";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();

  try {
    connectToDB();

    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt.", { status: 500 });
  }
};
