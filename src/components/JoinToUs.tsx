"use client";
import { Button } from "./ui/button";
import Animations from "./Animation";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

const JoinToUs = () => {
  const { toast } = useToast();
  const handleClick = () => {
    toast({
      title: "انضمام للنادي",
      description: "شكراً لاهتمامك! سيتم توجيهك إلى نموذج الانضمام.",
    });
  };
  return (
    <Animations>
      <div
        id="JoinToUs"
        onClick={handleClick}
        className="h-screen flex  items-center flex-col justify-center"
      >
        <Button size={"lg"} asChild>
          <Link href="https://forms.gle/rdeGTKLdTg9vZwy66"> انضم للنادي</Link>
        </Button>
      </div>
    </Animations>
  );
};

export default JoinToUs;
{
  /* <Button
          onClick={() => {
            toast({
              variant: "destructive",
              title: "التسجيل مغلق حاليا",
            });
          }}
          size={"lg"}
        >
          انضم للنادي
        </Button> */
}
