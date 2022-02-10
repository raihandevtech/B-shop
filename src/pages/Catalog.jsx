import React, { useState, useEffect, useCallback } from "react";
import CheckBox from "../components/CheckBox";
import Helmet from "../components/Helmet";

import category from "../assets/fake-data/category";
import colors from "../assets/fake-data/product-color";
import size from "../assets/fake-data/product-size";
import productData from "../assets/fake-data/products";
import InfinityList from "../components/InfinityList";
import Button from "../components/Button";

function Catalog() {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };
  const productList = productData.getAllProducts();
  const [products, setProducts] = useState(productList);
  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };

  const clearFilter = () => setFilter(initFilter);

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }

    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);
  return (
    <Helmet title="Catalog">
      <div className="catalog container">
        <div className="catalog_filter">
          <div className="catalog_filter_widget">
            <h2 className="catalog_filter_widget_title">Product Category</h2>
            <div className="catalog_filter_widget_content">
              {category.map((item, index) => (
                <div key={index} className="catalog_filter_widget_content_item">
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog_filter_widget">
            <h2 className="catalog_filter_widget_title">Product Size</h2>
            <div className="catalog_filter_widget_content">
              {size.map((item, index) => (
                <div key={index} className="catalog_filter_widget_content_item">
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.size.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog_filter_widget">
            <h2 className="catalog_filter_widget_title">Product Color</h2>
            <div className="catalog_filter_widget_content">
              {colors.map((item, index) => (
                <div key={index} className="catalog_filter_widget_content_item">
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("COLOR", input.checked, item)
                    }
                    checked={filter.color.includes(item.color)}
                  />
                </div>
              ))}
            </div>
          </div>
          <Button size="sm" onClick={clearFilter}>
            remove filter
          </Button>
        </div>
        <div className="catalog_content">
          <InfinityList data={products} />
        </div>
      </div>
    </Helmet>
  );
}

export default Catalog;
