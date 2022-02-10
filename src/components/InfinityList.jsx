import { useEffect, useRef, useState } from "react";
import Grid from "./Grid";
import ProductCard from "./ProductCard";

function InfinityList(props) {
  const perLoad = 6;
  const listRef = useRef(null);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setData(props.data.slice(0, perLoad));
    setIndex(1);
  }, [props.data]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (listRef && listRef.current) {
        if (
          window.scrollY + window.innerHeight >=
          listRef.current.clientHeight + listRef.current.offsetTop + 200
        ) {
          setLoad(true);
        }
      }
    });
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(props.data.length / perLoad);
      const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1;

      if (load && index <= maxIndex) {
        const start = perLoad * index;
        const end = start + perLoad;

        setData(data.concat(props.data.slice(start, end)));
        setIndex(index + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, index, data, props.data]);

  return (
    <div ref={listRef}>
      <Grid lgCol={3} smCol={2} gap={20}>
        {data.map((item, index) => (
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
    </div>
  );
}

export default InfinityList;
