import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/250329_Receive_Hart_Bar_Shitgazer_018_08bd05e8f7.jpg"
        alt="photo of band"
        id="live-shot"
        width={3000}
        height={3000}
        priority
      />
      <main id="home" className="prose">
        <h1>receive</h1>
        <Image
          src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/receive_logo_mixed_up_02_black_on_transparent_3cb23061cf.png"
          alt="receive logo"
          id="logo"
          width={3000}
          height={3000}
          priority
        />
        <p>weird loud band from queens</p>
      </main>
    </>
  );
}
