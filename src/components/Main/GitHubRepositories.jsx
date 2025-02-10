import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GitHubRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/melkien16/repos?sort=updated&per_page=6"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories.");
        }
        const data = await response.json();
        setRepositories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  if (loading)
    return <p className="text-center text-gray-500">Loading repositories...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="mt-10">
      <motion.h2
        initial={{ opacity: 0, y: 20, x: 20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="text-2xl font-bold text-white dark:text-gray-800 text-center mb-6"
      >
        Recent GitHub Repositories
      </motion.h2>
      <motion.ul
        initial={{ opacity: 0, y: 20, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {repositories.map((repo) => (
          <li
            key={repo.id}
            className="p-4 bg-gray-800 dark:bg-gray-200 rounded-lg shadow-lg transition hover:shadow-xl"
          >
            <h3 className="text-lg font-semibold text-white dark:text-gray-800 mb-2">
              {repo.name}
            </h3>
            <p className="text-sm text-gray-400 dark:text-gray-600 mb-4">
              {repo.description || `${repo.name} repository`}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary font-medium hover:underline"
            >
              View Repository
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default GitHubRepositories;
