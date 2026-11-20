import { useEffect } from 'react'
import FokusNavbar from '../components/FokusNavbar'
import FokusFooter from '../components/FokusFooter'
import { Arrow, ClockIcon, UserIcon, CheckIcon } from '../components/icons'
import { BLOG_POSTS, getPostBySlug } from '../data/blogData'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'

export default function BlogDetailPage({ slug }) {
  const { lang, isEn, t } = useLanguage()
  const post = getPostBySlug(slug) || BLOG_POSTS[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug)
  const nextPost = BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length]

  const accentColor = post.division === 'digital' ? '#5B7CFF' : '#2EE59D'

  return (
    <div className="thimos-page blog-detail-page">
      <FokusNavbar brand={post.division} theme="light" active="articles" />

      {/* Hero Header */}
      <section className="blog-detail-hero">
        <div className="container">
          <nav className="detail-breadcrumb">
            <a
              href="/articles"
              onClick={(e) => {
                e.preventDefault()
                navigate('articles')
              }}
            >
              {t('blog.back')}
            </a>
            <span className="crumb-sep">/</span>
            <span>{post.category[lang] || post.category.es}</span>
          </nav>

          <div className="detail-header-block" style={{ maxWidth: '980px', margin: '0 auto 2.5rem auto' }}>
            <div className="detail-badges-row" style={{ justifyContent: 'center' }}>
              <span
                className="brand-tag-chip"
                style={{
                  background:
                    post.division === 'digital'
                      ? 'rgba(91, 124, 255, 0.12)'
                      : 'rgba(46, 229, 157, 0.15)',
                  color: accentColor
                }}
              >
                <span className="pixel-box" /> {post.badge}
              </span>
              <span className="detail-cat-tag">
                {post.category[lang] || post.category.es}
              </span>
              <span className="detail-year-tag">
                <ClockIcon /> {post.readTime[lang] || post.readTime.es}
              </span>
            </div>

            <h1 className="blog-detail-giant-title">
              {post.title[lang] || post.title.es}
            </h1>

            <p className="detail-lead-summary" style={{ textAlign: 'center' }}>
              {post.excerpt[lang] || post.excerpt.es}
            </p>

            <div className="blog-detail-author-bar">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="detail-author-avatar"
              />
              <div className="detail-author-meta">
                <strong>{post.author.name}</strong>
                <span>{post.author.role[lang] || post.author.role.es} · {post.date[lang] || post.date.es}</span>
              </div>
            </div>
          </div>

          <div className="detail-hero-media-frame">
            <img
              src={post.image}
              alt={post.title[lang] || post.title.es}
              className="detail-hero-media-img"
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="blog-detail-body-section">
        <div className="container blog-content-container">
          {/* Key Takeaways Box */}
          <div className="blog-takeaways-box" style={{ borderColor: accentColor }}>
            <div className="takeaways-header">
              <span className="takeaways-icon" style={{ background: accentColor, color: post.division === 'digital' ? '#fff' : '#000' }}>
                <CheckIcon size={14} />
              </span>
              <h3>{t('blog.keyTakeaways')}</h3>
            </div>
            <ul className="takeaways-list">
              {(post.keyTakeaways[lang] || post.keyTakeaways.es).map((point, idx) => (
                <li key={idx}>
                  <span className="takeaway-bullet" style={{ background: accentColor }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content Blocks */}
          <div className="blog-rich-content">
            {(post.content[lang] || post.content.es).map((block, idx) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={idx} className="blog-subheading">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={idx} className="blog-pull-quote" style={{ borderLeftColor: accentColor }}>
                    <p>"{block.text}"</p>
                    {block.author && <cite>— {block.author}</cite>}
                  </blockquote>
                )
              }
              return (
                <p key={idx} className="blog-paragraph">
                  {block.text}
                </p>
              )
            })}
          </div>

          {/* Author Bio Box */}
          <div className="blog-author-bio-card">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="bio-avatar"
            />
            <div className="bio-info">
              <span className="bio-overline">{t('blog.writtenBy')}</span>
              <h4 className="bio-name">{post.author.name}</h4>
              <p className="bio-role">
                {post.author.role[lang] || post.author.role.es}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Article Teaser */}
      <section className="next-project-teaser container">
        <div
          className="next-project-card"
          onClick={() => navigate(`articles/${nextPost.slug}`)}
        >
          <div className="next-meta">
            <span className="next-lbl">{t('blog.nextArticle')}</span>
            <h3 className="next-title">{nextPost.title[lang] || nextPost.title.es}</h3>
            <p className="next-desc">{nextPost.excerpt[lang] || nextPost.excerpt.es}</p>
          </div>
          <div className="next-action">
            <span className="thimos-pill-btn">
              <span className="pill-circle" style={{ background: post.division === 'digital' ? '#5B7CFF' : '#2EE59D', color: '#000' }}>
                <Arrow size={14} />
              </span>
              <span className="pill-label">{t('blog.readArticle')}</span>
            </span>
          </div>
        </div>
      </section>

      <FokusFooter brand={post.division} />
    </div>
  )
}
