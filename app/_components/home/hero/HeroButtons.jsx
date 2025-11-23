import Button from "@/app/_ui/Button";
import Link from "next/link";

export default function HeroButtons() {
    return (
         <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/contact">
        <Button type="primary">  Start Your Project  </Button>
            </Link>
        <Button type="secondary"> Book a Consultation </Button>
        </div>
    )
}
