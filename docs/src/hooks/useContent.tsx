import { useEffect, useState } from "react";

import { ContentData } from "@/types/content";
import { loadContent } from "@/utils/loaders/content";

interface LoadingState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useContent = (slug: string): LoadingState<ContentData> => {
  const [data, setData] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchContent = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await loadContent(slug);
        if (!cancelled) {
          result ? setData(result) : setError(`Content not found: ${slug}`);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load content",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchContent();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { data, loading, error };
};

export const useContentBySection = (
  section: string,
  slug: string,
): LoadingState<ContentData> => {
  return useContent(`${section}/${slug}`);
};
