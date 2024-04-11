"use client";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "next-themes";
import imgDark from "../../public/iconLight.png";
import imgLight from "../../public/icon2.png";

import ImgNavBar from "./ImgNavBar";
interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#Name",
    label: "النادي",
  },
  {
    href: "#About",
    label: "من نحن",
  },
  {
    href: "#Vision",
    label: "الرؤية",
  },
  {
    href: "#Goals",
    label: "الأهداف",
  },
  {
    href: "#Reports",
    label: "التقارير",
  },
  {
    href: "#JoinToUs",
    label: "انضم للنادي",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const [Img, setImg] = useState<any>(theme === "dark" ? imgLight : imgDark);

  useEffect(() => {
    if (theme === "dark") {
      setImg("/icon2.png");
    } else {
      setImg("/iconLight.png");
    }
  }, [theme]);

  return (
    <header
      dir="rtl"
      className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background"
    >
      <NavigationMenu dir="rtl" className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              href="#Name"
              className="ml-2 font-bold space-x-5 text-xl flex items-center justify-center"
            >
              <ImgNavBar Img={Img} />
              {/* <Image src={Img} alt="logo" height={50} width={50} unoptimized /> */}
              <p className="ms-5">ITech Club</p>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                ></Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    ITech Club
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            {" "}
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
