import darkLogo from "@/assets/logos/dark.svg";
import logo from "@/assets/logos/main.svg";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[10.847rem]">
      <Image
        // src={logo}
        src="https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton//OPPORTUNITIES-removebg-preview.png"
        height={80}
        width={400}
        // src="https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton//rocketspeed.png"
        // fill
        className="dark:hidden rounded-full"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />

      <Image
        // src={darkLogo}
        src="https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton//OPPORTUNITIES-removebg-preview.png"
        // src="https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton//rocketspeed.png"

        // fill
        className="hidden dark:block rounded-full"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
                height={200}
        width={300}
      />
    </div>
  );
}
