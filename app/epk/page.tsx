'use client';
import Image from 'next/image';
import Link from 'next/link';
import { LiaInstagram, LiaBandcamp, LiaSpotify } from 'react-icons/lia';
import { RiBlueskyLine } from 'react-icons/ri';
import Obfuscate from 'react-obfuscate';

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <main id="epk">
      <h1>Receive EPK</h1>
      <h2>stuff that'll go here:</h2>
      <ul>
        <li>
          links to socials
          <ul>
            <li>
              <Link
                href="https://www.instagram.com/rreecceeiivvee/"
                title="Receive on Instagram"
              >
                <LiaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://slownames.bandcamp.com/"
                title="Receive on Bandcamp"
              >
                <LiaBandcamp />
              </Link>
            </li>
            <li>
              <Link
                href="https://open.spotify.com/album/5WAR3l0KMw0cS5uh6F7DpX"
                title="Receive on Spotify"
              >
                <LiaSpotify />
              </Link>
            </li>
            <li>
              <Link
                href="https://bsky.app/profile/slownames.bsky.social"
                title="Receive on Bluesky"
              >
                <RiBlueskyLine />
              </Link>
            </li>
          </ul>
        </li>
        <li>
          contact info
          <ul>
            <li>
              <Obfuscate email="receive@weirdslowrecords.com" />
            </li>
          </ul>
        </li>
        <li>
          reviews
          <ul>
            <li>
              "New Abrasions embraces everything from metallic screams to
              languid trip hop beats, swirling in delicate vocals and bursts of
              noise. It's a blissfully, abrasively dynamic experience that
              equally complements the harsh brutality of Resin Tomb and the
              reverb-drenched jangle of Beachglass. There's moments of sheer
              aggression, moments of tumbling through a haze, and moments of
              utter stillness, all existing in perfect harmony." &mdash;Heavy
              Blog is Heavy
            </li>
            <li>
              "A gravitational force listen from opening to close, New Abrasions
              pushes mind and body back into the chair, drifts into
              weightlessness and has thoughtful control of this beautiful sonic
              journey. Metal, rock, pop and ambient [...] these genre markers
              are used like describing weather... windy, humid, rainy or cold,
              all so much more definitive than the words conveyed." &mdash;Lost
              in a Sea of Sound
            </li>
          </ul>
        </li>
        <li>
          logo
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/receive_logo_mixed_up_01_black_on_transparent_a11daa34dd.png"
            height="500"
            width="500"
            alt="Receive logo in black"
          />
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/receive_logo_mixed_up_01_white_on_transparent_7f8a82e722.png"
            height="500"
            width="500"
            alt="Receive logo in white"
          />
        </li>
        <li>
          press photos
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/240209_rooftop_Katixa_01_62bf60f1e7.jpg"
            height="500"
            width="500"
            alt="Receive press photo"
          />
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/240209_rooftop_Katixa_12_9485c05a1c.jpg"
            height="500"
            width="500"
            alt="Receive press photo"
          />
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/living_room_desaturate_abbd800e3e.jpg"
            height="500"
            width="500"
            alt="Receive press photo"
          />
        </li>
        <li>
          live photos
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/250329_Receive_Hart_Bar_Shitgazer_244_0285b74547.jpg"
            height="500"
            width="500"
            alt="Receive live photo"
          />
          <Image
            src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/250329_Receive_Hart_Bar_Shitgazer_018_08bd05e8f7.jpg"
            height="500"
            width="500"
            alt="Receive live photo"
          />
        </li>
        <li>bio</li>
        <li>video (bird catcher? live vids?)</li>
        <li>PDF version</li>
      </ul>
    </main>
  );
}
