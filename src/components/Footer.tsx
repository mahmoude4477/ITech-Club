//import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className=" mt-5 py-6 md:px-8 md:py-0 border-t ">
      <div className="  container flex flex-col items-center justify-between gap-4 md:h-10 ">
        <p className="text-center text-sm leading-loose text-muted-foreground  ">
          Made by Mahmoud
          <>
            <a
              href={"https://x.com/_moud47"}
              target="_blank"
              rel="noreferrer"
              className="font-medium  flex justify-center mt-1 underline-offset-4 no-underline	"
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className=""
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </a>
          </>
          {/* <span className="block" dir="ltr">
            {" "}
   
          </span> */}
        </p>
      </div>
    </footer>
  );
}
