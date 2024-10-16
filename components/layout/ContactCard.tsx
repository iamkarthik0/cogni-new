import { Button } from "@/components/ui/button"

export default function ContactCard() {
  return (
    <div className="bg-[#D9D9D9] md:rounded-3xl p-8 text-center max-w-5xl mx-auto my-12 lg:my-24 ">
      <div className="space-y-6">
        <p className="font-semibold  uppercase ">Call to action</p>
        <h2 className="h2">What we can do for you?</h2>
        <p className=" md:text-2xl">
          Unlock the Power of Data: Transform Raw Information into <br></br> Valuable Insights
        </p>
        <Button className="btn  ">
          CONTACT US
        </Button>
      </div>
    </div>
  )
}