(function () {
    "use strict";

    var PAGE_SIZE = 10;
    var SECTION_IDS = [
        "baseArea_journal",
        "area_conference",
        "filter_medical",
        "filter_multi",
        "area_patent",
        "area_project"
    ];

    function normalizeText(value) {
        return value.replace(/\s+/g, " ").trim();
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
        var sections = {};
        SECTION_IDS.forEach(function (id) {
            var section = document.getElementById(id);
            if (!section) {
                return;
            }
            section.classList.add("publication-section");
            var rows = Array.prototype.slice.call(section.querySelectorAll("tr"));
            var items = rows.length ? rows : Array.prototype.slice.call(section.querySelectorAll(":scope > ol > li"));
            items.forEach(function (item) {
                if (item.tagName === "TR") {
                    var links = Array.prototype.slice.call(item.querySelectorAll("a.bold"));
                    links.forEach(function (link, index) {
                        var label = normalizeText(link.textContent);
                        if (/^\[(Page|Code|Data|Demo)\]$/i.test(label)) {
                            link.classList.add("publication-resource");
                        } else if (index === 0) {
                            link.classList.add("publication-title");
                        }
                    });
                }
            });
            sections[id] = { element: section, items: items };
        });

        var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-publication-target]"));
        var summary = document.getElementById("publication-summary");
        var empty = document.getElementById("publication-empty");
        var pagination = document.getElementById("publication-pagination");

        if (!tabs.length || !summary || !pagination) {
            return;
        }

        tabs.forEach(function (tab) {
            var data = sections[tab.dataset.publicationTarget];
            var count = tab.querySelector(".tab-count");
            if (data && count) {
                count.textContent = String(data.items.length);
            }
        });

        var state = {
            section: "baseArea_journal",
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
            Object.keys(sections).forEach(function (id) {
                sections[id].element.hidden = id !== state.section;
                sections[id].element.style.display = id === state.section ? "block" : "none";
            });

            var active = sections[state.section];
            if (!active) {
                return;
            }

            var matched = active.items;

            var pageCount = Math.max(1, Math.ceil(matched.length / PAGE_SIZE));
            state.page = Math.min(state.page, pageCount);
            var start = (state.page - 1) * PAGE_SIZE;
            var visible = new Set(matched.slice(start, start + PAGE_SIZE));
            active.items.forEach(function (item) {
                item.hidden = !visible.has(item);
            });

            empty.hidden = matched.length !== 0;
            var activeTab = tabs.filter(function (tab) {
                return tab.dataset.publicationTarget === state.section;
            })[0];
            var label = activeTab ? normalizeText(activeTab.childNodes[0].textContent) : "成果";
            if (matched.length) {
                summary.textContent = label + "，共 " + matched.length + " 条，当前显示 " + (start + 1) + "-" + Math.min(start + PAGE_SIZE, matched.length) + " 条";
            } else {
                summary.textContent = label + "，没有符合条件的内容";
            }
            renderPagination(matched.length ? pageCount : 0);
        }

        function activate(sectionId) {
            if (!sections[sectionId]) {
                return;
            }
            state.section = sectionId;
            state.page = 1;
            tabs.forEach(function (tab) {
                var active = tab.dataset.publicationTarget === sectionId;
                tab.classList.toggle("is-active", active);
                tab.parentElement.classList.toggle("current", active);
                tab.setAttribute("aria-current", active ? "true" : "false");
            });
            render();
        }

        tabs.forEach(function (tab) {
            tab.addEventListener("click", function (event) {
                event.preventDefault();
                activate(tab.dataset.publicationTarget);
            });
        });

        pagination.addEventListener("click", function (event) {
            var button = event.target.closest("button[data-page]");
            if (!button || button.disabled) {
                return;
            }
            state.page = Number(button.dataset.page);
            render();
            document.querySelector(".publication-titlebar").scrollIntoView({ behavior: "smooth", block: "start" });
        });

        window.showPublicationView = activate;
        window.refreshPart = activate;
        activate(state.section);
    });
}());
