import React from "react"
import Layout from "../components/layout"
import HomeHero from "../layouts/HomeHero/home-hero.component";
import PromoTabs from "../layouts/PromoTabs/promo-tabs.component";
import TextImage from "../layouts/TextImage/text-image.component";
import InstagramFeed from "../layouts/InstagramFeed/instagram-feed";
import ContentBgImage from "../layouts/ContentBgImage/content-bg-image.component";
import Map from "../layouts/Map/map.component";

const Index = () => {
  return (
    <Layout>
        <HomeHero />
        <PromoTabs />
        <TextImage />
        <InstagramFeed />
        <ContentBgImage />
        <Map />
    </Layout>
  )
}

export default Index
