'use client';
import Image from 'next/image';
import Link from 'next/link';
import { LiaInstagram, LiaBandcamp, LiaSpotify } from 'react-icons/lia';
import { RiBlueskyLine } from 'react-icons/ri';
import { SiApplemusic } from 'react-icons/si';
import { PiPatreonLogoBold } from 'react-icons/pi';
import Obfuscate from 'react-obfuscate';
import ampwallLogo from '../img/ampwall.svg';

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <main id="epk">
      <h1>Receive EPK</h1>
      <div id="epk-grid">
        <div className="epk-info">
          <div className="epk-logo">
            <span className="logo-graphic">
              <Image
                src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/receive_logo_mixed_up_01_white_on_transparent_7f8a82e722.png"
                height="1024"
                width="1024"
                alt="Receive logo in white"
              />
              <Link href="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/receive_logo_mixed_up_01_black_on_transparent_a11daa34dd.png">
                hi-res logo in black
              </Link>{' '}
              |{' '}
              <Link href="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/receive_logo_mixed_up_01_white_on_transparent_7f8a82e722.png">
                hi-res logo in white
              </Link>
            </span>
          </div>
          <hr />
          <div className="epk-socials">
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
                  href="https://bsky.app/profile/slownames.bsky.social"
                  title="Receive on Bluesky"
                >
                  <RiBlueskyLine />
                </Link>
              </li>
              <li>
                <Link
                  href="https://patreon.com/user?u=18475116"
                  title="Receive on Patreon"
                >
                  <PiPatreonLogoBold />
                </Link>
              </li>
            </ul>
            <div className="epk-socials-contact">
              email: <Obfuscate email="receive@weirdslowrecords.com" />
            </div>
          </div>
          <hr />
          <div className="epk-bio">
            <h2>Bio</h2>
            <p>
              <strong>Receive</strong> is a heavy art rock band from Queens NY.
              Started in 2022 by <strong>Brendan Landis</strong> (
              <em>Hey Exit</em>, <em>Glifter</em>, <em>Star Card</em>,{' '}
              <em>Big Hiatus</em>), it was conceived as an ever-expanding
              compositional labyrinth &mdash; something to wander through,
              rather than be played in the background and politely ignored. In
              2024, <strong>Already Dead Tapes</strong> released{' '}
              <strong>New Abrasions</strong>, a 47-minute EP of weird, loud,
              surreal tunes spanning a number of stylistic and philosophical
              interests.
            </p>

            <p>
              In 2025, Brendan is joined by <strong>Calley Nelson</strong> on
              lead guitar (<em>Star Card</em>, <em>Glifter</em>,{' '}
              <em>Childless</em>), <strong>Brie Cutrer</strong> on bass (
              <em>Bury Them and Keep Quiet</em>, <em>Ocean of Ghosts</em>), and{' '}
              <strong>Randy Schott</strong> on drums. They are currently writing
              the band's second release.
            </p>
            <p>
              Based in New York's ever-changing scene of underground
              experimental and extreme music, <strong>Receive</strong> emanates
              a high-energy set of ecstatic and exhilaratingly heavy music that
              turns heads, sparks curiosity, and is tough to ignore.
            </p>
          </div>
          <hr />
          <div className="epk-press">
            <h2>Press</h2>
            <ul>
              <li>
                <em>
                  "New Abrasions embraces everything from metallic screams to
                  languid trip hop beats, swirling in delicate vocals and bursts
                  of noise. It's a blissfully, abrasively dynamic experience
                  that equally complements the harsh brutality of Resin Tomb and
                  the reverb-drenched jangle of Beachglass. There's moments of
                  sheer aggression, moments of tumbling through a haze, and
                  moments of utter stillness, all existing in perfect harmony."
                </em>{' '}
                &mdash;<strong>Unmetal Monthly</strong>
              </li>
              <li>
                <em>
                  "A gravitational force listen from opening to close, New
                  Abrasions pushes mind and body back into the chair, drifts
                  into weightlessness and has thoughtful control of this
                  beautiful sonic journey. Metal, rock, pop and ambient [...]
                  these genre markers are used like describing weather... windy,
                  humid, rainy or cold, all so much more definitive than the
                  words conveyed."
                </em>{' '}
                &mdash;<strong>Lost in a Sea of Sound</strong>
              </li>
            </ul>
          </div>
          <hr />
          <div className="epk-pdf">
            <Link href="#">Download this EPK as a PDF</Link>
          </div>
          <div className="epk-contact-footer">
            email: <Obfuscate email="receive@weirdslowrecords.com" />
          </div>
        </div>
        <div className="epk-media">
          <div className="epk-listen">
            <iframe
              src="https://bandcamp.com/EmbeddedPlayer/album=4196908626/size=large/bgcol=333333/linkcol=9a64ff/tracklist=false/transparent=true/"
              seamless
            ></iframe>
            <ul className="epk-listen-links">
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
                  href="https://ampwall.com/a/receive"
                  title="Receive on Ampwall"
                >
                  <Image src={ampwallLogo} alt="Ampwall logo" />
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
              <li className="small-icon">
                <Link
                  href="https://music.apple.com/us/album/new-abrasions/1800901906"
                  title="Receive on Apple Music"
                >
                  <SiApplemusic />
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <div className="epk-pics">
            <h2>Photos</h2>
            <ul>
              <li>
                <Image
                  src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/living_room_desaturate_abbd800e3e.jpg"
                  height="700"
                  width="700"
                  alt="Receive press photo"
                />
                <Link href="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/living_room_desaturate_abbd800e3e.jpg">
                  download hi-res version of this photo
                </Link>
              </li>
              <li>
                <Image
                  src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/250329_Receive_Hart_Bar_Shitgazer_244_0285b74547.jpg"
                  height="700"
                  width="700"
                  alt="Receive live photo"
                />
                <Link href="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/250329_Receive_Hart_Bar_Shitgazer_244_0285b74547.jpg">
                  download hi-res version of this photo
                </Link>
              </li>
              <li>
                <Image
                  src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/240209_rooftop_Katixa_01_62bf60f1e7.jpg"
                  height="700"
                  width="700"
                  alt="Receive press photo"
                />
                <Link href="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/240209_rooftop_Katixa_01_62bf60f1e7.jpg">
                  download hi-res version of this photo
                </Link>
              </li>
              <li>
                <Image
                  src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/250329_Receive_Hart_Bar_Shitgazer_018_08bd05e8f7.jpg"
                  height="700"
                  width="700"
                  alt="Receive live photo"
                />
                <Link href="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/250329_Receive_Hart_Bar_Shitgazer_018_08bd05e8f7.jpg">
                  download hi-res version of this photo
                </Link>
              </li>
              <li>
                <Image
                  src="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/240209_rooftop_Katixa_12_9485c05a1c.jpg"
                  height="700"
                  width="700"
                  alt="Receive press photo"
                />
                <Link href="https://slownames-strapi-media.s3.us-east-1.amazonaws.com/240209_rooftop_Katixa_12_9485c05a1c.jpg">
                  download hi-res version of this photo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
