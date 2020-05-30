let style = document.createElement('style')
style.type = 'text/css'
style.innerHTML = `
.XPromoPill {
  display: none;
}

.TopButton.pulse {
  display: none;
}

.PostHeader__post-descriptor-line-overflow {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.PostHeader__post-title-line {
  font-size: 13px !important;
}

.PostFooter {
  padding-top: 3px !important;
  padding-bottom: 3px !important;
}

.PostContent.size-compact {
  margin-top: -5px !important;
}

.CommentsPage {
  font-size: 13px;
}

.Post .PostHeader__post-title-line {
  padding-top: 8px;
}
`
document.head.appendChild(style)
