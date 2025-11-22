import Banner from "../../components/Home/Banner"
import Card from "../../components/Home/Card"
import EventsSection from "../../components/Home/EventsSection"

import NewsSection from "../../components/Home/NewsSection"
import QuickInfo from "../../components/Home/QuickInfo"


function Home() {
  return (
    <div>
      <Banner></Banner>
      <QuickInfo></QuickInfo>
      <NewsSection></NewsSection>
      <EventsSection></EventsSection>
      <Card></Card>
    </div>
  )
}

export default Home