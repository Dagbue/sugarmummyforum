<template>
  <section id="blog" class="blog-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Insights & Advice</h2>
        <p class="section-description">
          Expert guidance on building meaningful connections and navigating the world of premium dating
        </p>
      </div>

      <div class="blog-grid">
        <article
            v-for="(post, index) in blogPosts"
            :key="index"
            class="blog-card"
        >
          <div class="image-container">
            <img
                :src="post.image"
                :alt="post.title"
                class="blog-image"
            />
            <span class="category-tag">{{ post.category }}</span>
          </div>

          <div class="content">
            <h3 class="blog-title">{{ post.title }}</h3>
            <p class="blog-excerpt">{{ post.excerpt }}</p>

            <div class="meta">
              <div class="meta-info">
                <div class="meta-item">
                  <svg
                      class="icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  >
                    <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                    ></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="16" cy="7" r="4"></circle>
                  </svg>
                  <span>{{ post.author }}</span>
                </div>
                <div class="meta-item">
                  <svg
                      class="icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  >
                    <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{{ post.date }}</span>
                </div>
              </div>
              <div class="meta-item">
                <svg
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{{ post.readTime }}</span>
              </div>
            </div>

<!--            <button class="read-more">-->
<!--              <span>Read More</span>-->
<!--              <svg-->
<!--                  class="arrow-icon"-->
<!--                  viewBox="0 0 24 24"-->
<!--                  fill="none"-->
<!--                  stroke="currentColor"-->
<!--                  stroke-width="2"-->
<!--                  stroke-linecap="round"-->
<!--                  stroke-linejoin="round"-->
<!--              >-->
<!--                <line x1="5" y1="12" x2="19" y2="12"></line>-->
<!--                <polyline points="12 5 19 12 12 19"></polyline>-->
<!--              </svg>-->
<!--            </button>-->
          </div>
        </article>
      </div>

<!--      <div class="view-all-container">-->
<!--        <button class="view-all-button">View All Articles</button>-->
<!--      </div>-->
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogSection',
  setup() {
    const blogPosts = [
      {
        title: "The Art of Sophisticated Dating in 2025",
        excerpt: "Discover the evolving landscape of premium connections and how successful individuals are redefining modern relationships.",
        author: "Dr. Sarah Mitchell",
        date: "January 15, 2025",
        readTime: "8 min read",
        category: "Lifestyle",
        image: "https://cdn.pixabay.com/photo/2020/06/25/03/04/couple-5338310_1280.jpg"
      },
      {
        title: "Building Authentic Connections: A Guide for Professionals",
        excerpt: "Learn how to create meaningful relationships that align with your career success and personal values.",
        author: "Marcus Thompson",
        date: "January 12, 2025",
        readTime: "6 min read",
        category: "Relationships",
        image: "https://cdn.pixabay.com/photo/2016/11/08/06/45/happy-valentines-day-1807617_1280.jpg"
      },
      {
        title: "Privacy and Security in Digital Dating",
        excerpt: "Understanding the importance of discretion and safety when connecting with others online.",
        author: "Elena Rodriguez",
        date: "January 10, 2025",
        readTime: "5 min read",
        category: "Safety",
        image: "https://cdn.pixabay.com/photo/2020/02/28/22/39/love-4888776_1280.jpg"
      }
    ];

    return {
      blogPosts
    };
  }
};
</script>

<style scoped>
.blog-section {
  padding: 5rem 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.25rem;
  color: #cbd5e1; /* text-slate-300 */
  max-width: 32rem;
  margin: 0 auto;
}

.blog-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.blog-card {
  background: rgba(30, 41, 59, 0.8); /* bg-slate-800/80 */
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid rgba(51, 65, 85, 0.5); /* border-slate-700/50 */
  transition: all 0.3s ease;
}

.blog-card:hover {
  border-color: rgba(99, 102, 241, 0.5); /* hover:border-indigo-500/50 */
  transform: scale(1.05);
}

.image-container {
  position: relative;
  overflow: hidden;
}

.blog-image {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image {
  transform: scale(1.1);
}

.category-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #6366f1; /* bg-indigo-500 */
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.content {
  padding: 1.5rem;
}

.blog-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.blog-card:hover .blog-title {
  color: #818cf8; /* hover:text-indigo-400 */
}

.blog-excerpt {
  color: #cbd5e1; /* text-slate-300 */
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #94a3b8; /* text-slate-400 */
  margin-bottom: 1rem;
}

.meta-info {
  display: flex;
  gap: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.icon {
  width: 1rem;
  height: 1rem;
}

.read-more {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #818cf8; /* text-indigo-400 */
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #a5b4fc; /* hover:text-indigo-300 */
}

.read-more:hover .arrow-icon {
  transform: translateX(0.25rem);
}

.arrow-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.view-all-container {
  text-align: center;
}

.view-all-button {
  padding: 0.75rem 2rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 9999px;
  color: white;
  border: none;
  transition: all 0.3s ease;
}

.view-all-button:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
  transform: scale(1.05);
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .blog-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.875rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }

  .blog-image {
    height: 10rem;
  }
}
</style>