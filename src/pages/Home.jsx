import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import heroSliderData from "../assets/fake-data/hero-slider";
import productData from "../assets/fake-data/products";
import policy from "../assets/fake-data/policy";
import banner from "../assets/images/banner.jpg";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import PolicyCard from "../components/PolicyCard";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <Helmet title="Home">
      {/* hero slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={5000}
      />
      {/* end hero slider */}
      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid lgCol={4} mdCol={3} smCol={2} gap={20} container={true}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard item={item} />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}
      {/* best selling section */}
      <Section>
        <SectionTitle>Top selling products</SectionTitle>
        <SectionBody>
          <Grid lgCol={4} mdCol={3} smCol={2} gap={20} container={true}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                description={item.description}
                oldprice={item.oldPrice}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section */}
      {/* new arrival section */}
      <Section>
        <SectionTitle>New Product</SectionTitle>
        <SectionBody>
          <Grid lgCol={4} mdCol={3} smCol={2} gap={20} container={true}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                description={item.description}
                price={Number(item.price)}
                oldprice={item.oldPrice}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section */}
      {/* banner */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <div className="container">
              <img className="banner" src={banner} alt="" />
            </div>
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}
      {/* popular product section */}
      <Section>
        <SectionTitle>popular</SectionTitle>
        <SectionBody>
          <Grid lgCol={4} mdCol={3} smCol={2} gap={20} container={true}>
            {productData.getProducts(12).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                description={item.description}
                price={Number(item.price)}
                oldprice={item.oldPrice}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end popular product section */}
    </Helmet>
  );
}

export default Home;
