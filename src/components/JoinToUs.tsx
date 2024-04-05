"use client";
import { Button } from "./ui/button";
import Animations from "./Animation";
import { useToast } from "@/components/ui/use-toast";

const JoinToUs = () => {
  const { toast } = useToast();
  return (
    <Animations>
      <div className="h-screen flex  items-center flex-col justify-center">
        <Button
          onClick={() => {
            toast({
              variant: "destructive",
              title: "التسجيل مغلق حاليا",
            });
          }}
          size={"lg"}
        >
          انضم للنادي
        </Button>
      </div>
    </Animations>
  );
};

export default JoinToUs;
