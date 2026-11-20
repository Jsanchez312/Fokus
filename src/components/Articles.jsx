import { ScrollTitle, useInView } from './shared'
import { Arrow, ClockIcon, UserIcon } from './icons'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'
import { BLOG_POSTS } from '../data/blogData'

export default function Articles() {
  const ref = useInView(0.2)
  const { lang, isEn, t } = useLanguage()

  const featured = BLOG_POSTS[0]
  const sidePosts = BLOG_POSTS.slice(1, 3)

  return (
    <section className="articles" id="articles">
      <ScrollTitle
        badge={isEn ? 'VIEW ALL INSIGHTS' : 'VER TODOS'}
        onBadgeClick={() => navigate('articles')}
      >
        {isEn ? 'ARTICLES & INSIGHTS' : 'ARTÍCULOS'}
      </ScrollTitle>

      <div className="articles-grid container" ref={ref}>
        <div
          className="post-feature"
          onClick={() => navigate(`articles/${featured.slug}`)}
          style={{ cursor: 'pointer' }}
        >
          <div className="post-img" style={{ backgroundImage: `url(${featured.image})` }} />
          <h3>
            {featured.title[lang] || featured.title.es}
          </h3>
        </div>

        <div className="post-list">
          {sidePosts.map((p) => (
            <div
              className="post"
              key={p.slug}
              onClick={() => navigate(`articles/${p.slug}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="post-top">
                <h3>{p.title[lang] || p.title.es}</h3>
                <span className="go">
                  <Arrow size={16} />
                </span>
              </div>
              <p>{p.excerpt[lang] || p.excerpt.es}</p>
              <div className="meta">
                <span>
                  <UserIcon /> {p.author.name}
                </span>
                <span>
                  <ClockIcon /> {p.readTime[lang] || p.readTime.es}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
