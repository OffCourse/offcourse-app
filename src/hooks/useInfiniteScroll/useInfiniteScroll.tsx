import React, { FunctionComponent, useEffect, useState } from "react";
import { identity } from "ramda";
import { useInView } from "react-intersection-observer";

const useInfiniteScroll: (opts: {
  hasMore: boolean;
  loadMore: () => void;
}) => { scrollRef: (node: Element | null) => void } = ({
  loadMore = () => null,
  hasMore = true
}) => {
  const [scrollRef, inView, entry] = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView && hasMore) {
      loadMore();
    }
  }, [inView, hasMore]);

  return { scrollRef };
};

export default useInfiniteScroll;
