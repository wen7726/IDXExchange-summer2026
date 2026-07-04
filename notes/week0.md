# Week 0 Notes

## What I worked on

This week was mainly about setting up my development environment for the internship.

I installed OpenClaw, cloned the internship repository, configured my local workspace, and became familiar with the overall project structure.

## Environment setup

- Installed OpenClaw
- Configured Node.js and npm
- Connected VS Code to the project
- Learned the repository structure
- Verified the local gateway could start successfully

## What I practiced

I spent some time learning the basic OpenClaw commands.

Some of the commands I used most often were:

- openclaw status
- openclaw channels list
- openclaw gateway restart
- openclaw logs

I also learned where the configuration file is located and how the gateway loads plugins.

## Challenges

The biggest challenge was getting WhatsApp connected correctly.

At first the gateway started normally, but messages weren't reaching the agent. I spent some time checking the logs and configuration before understanding how the channel and allowlist worked.

## What I learned

Before this week I thought OpenClaw was just a chatbot.

After setting everything up, I realized it's actually an orchestration platform that connects channels, skills, tools, memory, and AI models together.

Understanding the environment first made it much easier to follow the architecture in Week 1.

## Next week

Learn the overall OpenClaw architecture and understand how a user message flows through the system.