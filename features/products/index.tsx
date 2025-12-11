"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star, Percent } from "lucide-react";
import { ProductImage } from "@/components/product-image";
import { products, productCategories } from "./constants";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  const calculateDiscount = (price: number, originalPrice?: number) => {
    if (!originalPrice) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Shop Now
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-5xl font-extrabold text-transparent">
            Our Products
          </h1>
          <p className="text-lg text-slate-600">
            Dermatologist-approved skincare and haircare products
          </p>
        </div>

        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-5">
            {productCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product, index) => {
                const discount = calculateDiscount(
                  product.price,
                  product.originalPrice
                );
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="group flex h-full flex-col overflow-hidden border-2 border-slate-100 transition-all duration-300 hover:border-sky-200 hover:shadow-xl">
                      <CardHeader className="relative shrink-0 bg-gradient-to-br from-slate-50 to-white p-4">
                        <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner">
                          <ProductImage
                            src={product.image}
                            alt={product.name}
                          />
                          {discount > 0 && (
                            <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                              <Percent className="h-3 w-3" />
                              {discount}% OFF
                            </div>
                          )}
                        </div>
                        <CardTitle className="line-clamp-2 min-h-[3.5rem] text-lg">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 min-h-[2.5rem]">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto flex flex-col">
                        <div className="mb-4 flex items-center gap-2">
                          {product.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">
                                {product.rating}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="mb-4 flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-primary">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                        <Button className="w-full" disabled={!product.inStock}>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
