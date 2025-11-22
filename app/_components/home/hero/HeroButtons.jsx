import Button from "@/app/_ui/Button";

export default function HeroButtons() {
    return (
         <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Button type="primary">  Start Your Project  </Button>
        <Button type="secondary"> Book a Consultation </Button>
        </div>
    )
}
