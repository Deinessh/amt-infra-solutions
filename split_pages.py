import os
import re

path = r'c:\Users\91936\.gemini\antigravity-ide\scratch\amt-infra-solutions\index.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace links in header and footer
nav_replacements = {
    'href="#hero"': 'href="index.html"',
    'href="#catalog"': 'href="products.html"',
    'href="#estimator"': 'href="estimator.html"',
    'href="#why-us"': 'href="about.html"',
    'href="#contact"': 'href="contact.html"',
}

# The footer product links use #catalog and onclick.
# Better to strip the onclick and just point to products.html
content = re.sub(r'href="#catalog" onclick="[^"]*"', 'href="products.html"', content)

for k, v in nav_replacements.items():
    content = content.replace(k, v)

# Define parts based on comments
head_end = content.find('  <main>') + len('  <main>')
footer_start = content.find('  </main>')

top_part = content[:head_end]
bottom_part = content[footer_start:]

# Extract sections
hero = content[content.find('    <!-- Hero Section -->'):content.find('    <!-- Interactive Catalog Section -->')]
catalog = content[content.find('    <!-- Interactive Catalog Section -->'):content.find('    <!-- Cost Estimator Section -->')]
estimator = content[content.find('    <!-- Cost Estimator Section -->'):content.find('    <!-- Why Choose Us Section -->')]
why_us = content[content.find('    <!-- Why Choose Us Section -->'):content.find('    <!-- Contact Section -->')]
contact = content[content.find('    <!-- Contact Section -->'):content.find('  </main>')]

pages = {
    'index.html': hero,
    'products.html': catalog,
    'estimator.html': estimator,
    'about.html': why_us,
    'contact.html': contact
}

# Create each page
for file_name, section_html in pages.items():
    # Fix active link in top_part
    current_top = top_part.replace('class="nav-link active"', 'class="nav-link"')
    current_top = current_top.replace(f'href="{file_name}" class="nav-link"', f'href="{file_name}" class="nav-link active"')
    
    page_content = current_top + "\n" + section_html + "\n" + bottom_part
    with open(os.path.join(r'c:\Users\91936\.gemini\antigravity-ide\scratch\amt-infra-solutions', file_name), 'w', encoding='utf-8') as f:
        f.write(page_content)

print("Pages created successfully!")

# Create robots.txt
robots_content = """User-agent: *
Allow: /

Sitemap: https://www.amtinfrasolutions.com/sitemap.xml
"""
with open(r'c:\Users\91936\.gemini\antigravity-ide\scratch\amt-infra-solutions\robots.txt', 'w', encoding='utf-8') as f:
    f.write(robots_content)

print("robots.txt created successfully!")

# Create sitemap.xml
sitemap_content = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://www.amtinfrasolutions.com/</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
   </url>
   <url>
      <loc>https://www.amtinfrasolutions.com/index.html</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
   </url>
   <url>
      <loc>https://www.amtinfrasolutions.com/products.html</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
   </url>
   <url>
      <loc>https://www.amtinfrasolutions.com/estimator.html</loc>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
   </url>
   <url>
      <loc>https://www.amtinfrasolutions.com/about.html</loc>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
   </url>
   <url>
      <loc>https://www.amtinfrasolutions.com/contact.html</loc>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
   </url>
</urlset>
"""
with open(r'c:\Users\91936\.gemini\antigravity-ide\scratch\amt-infra-solutions\sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(sitemap_content)

print("sitemap.xml created successfully!")
