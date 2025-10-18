"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Charming café interior in Geelong featuring vinyl records, blackboard menu, and retro decor."},
  {"id":"about-image","url":"https://images.pexels.com/photos/904346/pexels-photo-904346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A rustic setup featuring a cup filled with coffee beans and a coffee-themed magazine on a wooden table."},
  {"id":"feature-coffee","url":"https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A detailed view of aromatic roasted Arabica coffee beans, highlighting texture and brown color."},
  {"id":"feature-baked","url":"https://images.pexels.com/photos/5964496/pexels-photo-5964496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of golden croissants fresh out of the oven on a baking tray."},
  {"id":"feature-tea","url":"https://images.pexels.com/photos/8001173/pexels-photo-8001173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Explore a vibrant display of teas and honey at a bustling market stall in Sochumi."},
  {"id":"product-latte","url":"https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Captivating image of a barista pouring milk art into a cappuccino cup, showcasing latte art skills."},
  {"id":"product-espresso","url":"https://images.pexels.com/photos/34315406/pexels-photo-34315406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"espresso shot - Photo by Travel with  Lenses"},
  {"id":"product-muffin","url":"https://images.pexels.com/photos/34275122/pexels-photo-34275122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Freshly baked chocolate chip muffins in a tray with decorative plates nearby on a wooden table."},
  {"id":"team-jane","url":"https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling African American waitress wearing casual t shirt and apron standing at counter in cozy coffee shop with female customer while serving hot drink and looking at each other"},
  {"id":"team-mike","url":"https://images.pexels.com/photos/3770107/pexels-photo-3770107.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling waiter serves coffee in a hotel room, offering hospitality and service."}
];

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarLayoutFloatingInline
            navItems={[{ name: "Home", id: "home" }, { name: "About", id: "about" }, { name: "Contact", id: "contact" }]}
            brandName="Coffee Hub"
            buttonText="Order Now"
            buttonVariant="text-stagger"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Coffee Hub"
            description="Experience the best coffee in town"
            buttons={[{ text: "Explore Menu", href: "about" }, { text: "Visit Us", href: "contact" }]}
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={["Coffee Hub is known for its quality brews and cozy atmosphere.", "We are committed to serving the best beverages and snacks, with fresh ingredients and love."]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            features={[
              {
                id: "01",
                title: "Premium Coffee",
                description: "Our specialty roasted beans make every cup special.",
                imageSrc: assetMap.find(a => a.id === "feature-coffee")?.url ?? "/public/images/placeholder.webp"
              },
              {
                id: "02",
                title: "Fresh Baked Goods",
                description: "Enjoy a variety of pastries baked daily.",
                imageSrc: assetMap.find(a => a.id === "feature-baked")?.url ?? "/public/images/placeholder.webp"
              },
              {
                id: "03",
                title: "Variety of Teas",
                description: "Explore our selection of fine teas from around the world.",
                imageSrc: assetMap.find(a => a.id === "feature-tea")?.url ?? "/public/images/placeholder.webp"
              }
            ]}
            title="Our Features"
            description="What makes us stand out in a crowd"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              {
                id: "1",
                name: "Café Latte",
                price: "$5",
                imageSrc: assetMap.find(a => a.id === "product-latte")?.url ?? "/public/images/placeholder.webp"
              },
              {
                id: "2",
                name: "Espresso",
                price: "$4",
                imageSrc: assetMap.find(a => a.id === "product-espresso")?.url ?? "/public/images/placeholder.webp"
              },
              {
                id: "3",
                name: "Chocolate Muffin",
                price: "$3",
                imageSrc: assetMap.find(a => a.id === "product-muffin")?.url ?? "/public/images/placeholder.webp"
              }
            ]}
            title="Our Delights"
            description="Taste the perfection"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Updated with Coffee Hub"
            description="Subscribe to our newsletter for updates and exclusive offers."
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              {
                items: [
                  { label: "Home", href: "home" },
                  { label: "About", href: "about" }
                ]
              },
              {
                items: [
                  { label: "Products", href: "products" },
                  { label: "Contact", href: "contact" }
                ]
              }
            ]}
            logoText="Coffee Hub"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
