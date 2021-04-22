import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    HomeIcon,
    LightningBoltIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"

import { useRouter } from "next/router"

export default function Header() {
    const router = useRouter();

    return (
        <header className="flex flex-col items-center sm:flex-row m-5 justify-between h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="VERIFIED" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>

            <Image
                className="object-contain cursor-pointer"
                src="https://links.papareact.com/ua6/"
                width={200}
                height={100}
                onClick={() => router.push("/")}
            />
        </header >
    )
}
