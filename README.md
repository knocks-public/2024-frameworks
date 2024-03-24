[![CI](https://github.com/knocks-public/2024-frameworks/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/knocks-public/2024-frameworks/actions/workflows/ci.yml)
![GitHub last commit](https://img.shields.io/github/last-commit/knocks-public/2024-frameworks)
![GitHub top language](https://img.shields.io/github/languages/top/knocks-public/2024-frameworks)
![GitHub pull requests](https://img.shields.io/github/issues-pr/knocks-public/2024-frameworks)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/knocks-public/2024-frameworks)
![GitHub repo size](https://img.shields.io/github/repo-size/knocks-public/2024-frameworks)

# StampCraft

ETH Global Link: https://ethglobal.com/showcase/stampcraft-izphw

<img src=https://github.com/knocks-public/2024-frameworks/assets/11481781/e5568051-9c4a-42cf-b010-53bbf11f8c1e width=60%>

## Introduction

Welcome to **StampCraft**, the groundbreaking application transforming online communication. By leveraging the innovative Forcaster protocol and integrating into the Warpcast platform, StampCraft was created during the 2024-Frameworks hackathon to introduce a novel way to create and share LINE-style digital stamps. Dive into a world where expressing emotions, reactions, or conveying unique messages is not only possible but encouraged through adorable, customizable digital stamps. As of today, StampCraft specializes in automatically creating stamps focused on Sushi, a globally beloved Japanese dish, from a single sentence.

## Use Cases & How It Works

StampCraft simplifies the creation and sharing of digital stamps:

1. **Create Your Stamp**: Design unique digital stamps with our user-friendly interface—no advanced design skills needed.
2. **Share Globally**: Share your creations via Warpcast using the Farcaster protocol, connecting communities and conversations.
3. **Engage & Connect**: Enhance your online interactions with custom stamps, exploring and contributing to a vibrant community.

## Features

- **Ease of Use**: Intuitive design tools accessible to everyone.
- **Farcaster Integration**: Utilize Web3 technology for sharing and using stamps.
- **Community-Focused**: Connect with a broad spectrum of artists and communicators.

## Technology Stack

- **Frontend**: Developed with NextJS and [frames.js](https://framesjs.org/).
- **Backend**: Powered by NextJS alongside the OpenAI image generation API.
- **Deployment**: Hosted on [Vercel](https://vercel.com/).

## How It's Made

StampCraft transcends the traditional boundaries of digital communication by leveraging the advanced capabilities of the OpenAI API, enabling anyone to create delightful digital stamps effortlessly. Operating within the dynamic WarpCast platform as a Frame, StampCraft embodies a fusion of creativity, technology, and user accessibility.

### Leveraging OpenAI for Creative Expression

At the heart of StampCraft's innovative engine lies the OpenAI API, a powerhouse of machine learning models capable of understanding and generating complex images from textual descriptions. This integration allows StampCraft users to transform simple text prompts into charming, visually appealing digital stamps. By harnessing the power of OpenAI's cutting-edge technology, StampCraft ensures that the process of creating unique and engaging stamps is not only possible for everyone but also deeply rewarding and fun.

### Crafted Prompts for Delightful Stamps

The secret sauce to generating these captivating stamps lies in the carefully crafted prompts designed to spark the AI's creativity in specific, user-relatable ways. Recognizing the importance of nuance and context, the StampCraft team has meticulously tailored prompts to encourage the generation of stamps that resonate on a personal level with users. Focusing on universally beloved themes like "Sushi" as a starting point, the prompts are engineered to guide the AI towards creating stamps that are not just cute but also rich in character and emotion. This thoughtful approach to prompt engineering ensures that each stamp is a small work of art, ready to be shared and cherished within the user community.

### A Platform for Everyone

The choice to host StampCraft as a Frame on the WarpCast platform is no coincidence. WarpCast's robust infrastructure and seamless integration capabilities provide the perfect launching pad for StampCraft's innovative features, ensuring a smooth, user-friendly experience. Whether you're a digital communication enthusiast, an artist looking to share your creations, or someone who appreciates the joy of personalized messages, StampCraft welcomes you to explore the limitless possibilities of AI-powered stamp creation.

In summary, StampCraft stands at the intersection of technology and creativity, offering a platform where anyone can bring their digital communication to life through the power of AI-generated stamps. It's not just about the technology; it's about empowering users to express themselves in new, exciting ways, making every digital interaction a little more personal and a lot more fun.

# Images

## System Overview

<img src=https://github.com/knocks-public/2024-frameworks/assets/11481781/52f9a4b1-ca17-4d9a-8989-a56946e2f937 width=70%>

## Screenshots

<img src=https://github.com/knocks-public/2024-frameworks/assets/11481781/1d3669e4-0b02-4e99-83e0-562c3ed3a80d width=19%>
<img src=https://github.com/knocks-public/2024-frameworks/assets/11481781/ae9afd4d-a6df-46c2-9f28-ba9dd00595fa width=19%>
<img src=https://github.com/knocks-public/2024-frameworks/assets/11481781/61062528-ea9e-4cfc-9011-8939353fdf5f width=19%>
<img src=https://github.com/knocks-public/2024-frameworks/assets/66736869/ce9ffe0a-b556-48af-8418-bef9813d567e width=19%>
<img src=https://github.com/knocks-public/2024-frameworks/assets/66736869/891e2d44-4136-4d84-b24a-1529a3e3d3ea width=19%>

## Getting Started

To embark on your StampCraft journey, ensure you have set the `OPENAI_API_KEY` in your environment variables. Refer to the [OpenAI API](https://openai.com/blog/openai-api) page for obtaining the `OPENAI_API_KEY`.

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/knocks-public/2024-frameworks.git
   ```

2. **Install Dependencies**:

   ```bash
   yarn install
   ```

3. **Launch the App**:

   ```bash
   yarn dev
   ```

   Then, visit [http://localhost:3000](http://localhost:3000).

4. **Debugging**: Access the debugging tools at [http://localhost:3000/debug](http://localhost:3000/debug).

## Deployment

Deploy effortlessly with Vercel:

```bash
vercel
```

## Future Use Cases

StampCraft aims to facilitate communication using stamps in a manner similar to LINE, enhancing the user experience with a touch of creativity and personalization.

## Contributing

We invite you to join us in further developing StampCraft! Feel free to propose changes via pull requests or submit issues for new ideas and bug reporting.

## License

StampCraft is proudly open-source, licensed under the MIT License. See the [LICENSE](LICENSE) for more details.

## The Team

- [Shingo Takagi](https://www.linkedin.com/in/shingo-takagi-8a017224a/), a visionary Full Stack Developer.
- [Susumu Tomita](https://www.linkedin.com/in/susumutomita/), an innovative Full Stack Developer.
