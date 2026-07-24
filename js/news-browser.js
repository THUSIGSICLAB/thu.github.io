(function () {
    "use strict";

    var PAGE_SIZE = 12;
    var categoryGroups = {
        "科研成果": "科研成果",
        "毕业微展": "毕业微展",
        "科技奖励": "荣誉奖励",
        "比赛介绍": "荣誉奖励",
        "师生活动": "师生活动",
        "毕业生风采": "师生活动",
        "采访实录": "师生活动",
        "参会总结": "学术交流",
        "文献综述": "学术交流",
        "有趣科普": "学术交流",
        "招 聘": "招聘信息",
        "新闻介绍": "其他"
    };

    function normalizeText(value) {
        return value.replace(/\s+/g, " ").trim();
    }

    function buildNewsItem(item) {
        var article = document.createElement("article");
        article.className = "news-item";
        article.dataset.category = item.category;

        var link = document.createElement("a");
        link.className = "news-main-link";
        link.href = item.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        var meta = document.createElement("span");
        meta.className = "news-item-meta";

        var category = document.createElement("span");
        category.className = "news-category";
        category.textContent = item.category;

        var date = document.createElement("time");
        date.className = "news-date";
        date.dateTime = item.date;
        date.textContent = item.date;

        meta.appendChild(category);
        meta.appendChild(date);

        var title = document.createElement("h2");
        title.className = "news-item-title";
        title.textContent = item.title;
        if (item.isNew) {
            var newLabel = document.createElement("span");
            newLabel.className = "news-new";
            newLabel.textContent = "新";
            title.appendChild(newLabel);
        }

        var arrow = document.createElement("span");
        arrow.className = "news-arrow";
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "\u203a";

        link.appendChild(meta);
        link.appendChild(title);
        link.appendChild(arrow);
        article.appendChild(link);

        if (item.resources.length) {
            var resources = document.createElement("div");
            resources.className = "news-resources";
            item.resources.forEach(function (resource) {
                var resourceLink = resource.cloneNode(true);
                resourceLink.target = "_blank";
                resourceLink.rel = "noopener noreferrer";
                resources.appendChild(resourceLink);
            });
            article.appendChild(resources);
        }

        return article;
    }

    function createPageButton(label, page, active, disabled, title) {
        var button = document.createElement("button");
        button.type = "button";
        button.textContent = label;
        button.dataset.page = String(page);
        button.disabled = disabled;
        if (active) {
            button.className = "is-active";
            button.setAttribute("aria-current", "page");
        }
        if (title) {
            button.title = title;
            button.setAttribute("aria-label", title);
        }
        return button;
    }

    document.addEventListener("DOMContentLoaded", function () {
        var list = document.getElementById("news-list");
        var summary = document.getElementById("news-summary");
        var empty = document.getElementById("news-empty");
        var pagination = document.getElementById("news-pagination");
        var filterLinks = Array.prototype.slice.call(document.querySelectorAll("[data-news-category]"));

        if (!list || !summary || !pagination) {
            return;
        }

        var parsed = [];
        var currentItem = null;
        Array.prototype.slice.call(list.children).forEach(function (element) {
            if (element.tagName !== "A") {
                return;
            }

            var text = normalizeText(element.textContent.replace(/new~/gi, ""));
            var match = text.match(/^【([^】]+)】\s*(\d{4}-\d{2}-\d{2})\s*(.+)$/);
            if (match) {
                var rawCategory = normalizeText(match[1]);
                currentItem = {
                    rawCategory: rawCategory,
                    category: categoryGroups[rawCategory] || "其他",
                    date: match[2],
                    title: match[3],
                    href: element.getAttribute("href"),
                    isNew: Boolean(element.querySelector(".small-text")),
                    resources: []
                };
                parsed.push(currentItem);
            } else if (currentItem) {
                currentItem.resources.push(element);
            }
        });

        list.innerHTML = "";
        var fragment = document.createDocumentFragment();
        parsed.forEach(function (item) {
            fragment.appendChild(buildNewsItem(item));
        });
        list.appendChild(fragment);

        var cards = Array.prototype.slice.call(list.querySelectorAll(".news-item"));
        var categoryCounts = parsed.reduce(function (counts, item) {
            counts[item.category] = (counts[item.category] || 0) + 1;
            return counts;
        }, {});

        filterLinks.forEach(function (link) {
            var categoryName = link.dataset.newsCategory;
            var count = categoryName ? (categoryCounts[categoryName] || 0) : parsed.length;
            var countElement = link.querySelector(".filter-count");
            if (countElement) {
                countElement.textContent = String(count);
            }
        });

        var state = {
            category: "",
            page: 1
        };

        function renderPagination(pageCount) {
            pagination.innerHTML = "";
            if (pageCount <= 1) {
                return;
            }

            pagination.appendChild(createPageButton("\u2039", state.page - 1, false, state.page === 1, "上一页"));

            var start = Math.max(1, state.page - 2);
            var end = Math.min(pageCount, start + 4);
            start = Math.max(1, end - 4);
            for (var page = start; page <= end; page += 1) {
                pagination.appendChild(createPageButton(String(page), page, page === state.page, false, "第 " + page + " 页"));
            }

            pagination.appendChild(createPageButton("\u203a", state.page + 1, false, state.page === pageCount, "下一页"));
        }

        function render() {
            var matched = cards.filter(function (card) {
                return !state.category || card.dataset.category === state.category;
            });

            var pageCount = Math.max(1, Math.ceil(matched.length / PAGE_SIZE));
            state.page = Math.min(state.page, pageCount);
            var start = (state.page - 1) * PAGE_SIZE;
            var visible = new Set(matched.slice(start, start + PAGE_SIZE));

            cards.forEach(function (card) {
                card.hidden = !visible.has(card);
            });

            empty.hidden = matched.length !== 0;
            var categoryLabel = state.category || "全部新闻";
            if (matched.length) {
                summary.textContent = categoryLabel + "，共 " + matched.length + " 条，当前显示 " + (start + 1) + "-" + Math.min(start + PAGE_SIZE, matched.length) + " 条";
            } else {
                summary.textContent = categoryLabel + "，没有符合条件的内容";
            }
            renderPagination(matched.length ? pageCount : 0);
        }

        filterLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                state.category = link.dataset.newsCategory;
                state.page = 1;
                filterLinks.forEach(function (item) {
                    item.parentElement.classList.toggle("current", item === link);
                    item.setAttribute("aria-current", item === link ? "true" : "false");
                });
                render();
            });
        });

        pagination.addEventListener("click", function (event) {
            var button = event.target.closest("button[data-page]");
            if (!button || button.disabled) {
                return;
            }
            state.page = Number(button.dataset.page);
            render();
            list.scrollIntoView({ behavior: "smooth", block: "start" });
        });

        render();
    });
}());
