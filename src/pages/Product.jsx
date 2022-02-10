import { useParams } from "react-router-dom";
import React from "react";
import productData from "../assets/fake-data/products";
import ProductView from "../components/ProductView";
import ProductCard from "../components/ProductCard";
import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";

function Product(props) {
  const params = useParams();
  const product = productData.getProductBySlug(params.slug);
  const relatedProducts = productData.getProducts(4);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <div className="container">
        <ProductView product={product} />
      </div>
      <div className="related_product">
        <SectionTitle>Related products</SectionTitle>
        <SectionBody>
          <Grid lgCol={4} mdCol={3} smCol={2} gap={20} container={true}>
            {relatedProducts.map((item, index) => (
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
      </div>
    </Helmet>
  );
}

export default Product;
