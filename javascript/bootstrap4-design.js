(function () {
    var designJSON = {
        "name": "bootstrap4",
        "label": "Bootstrap 4",
        "version": "0.0.1",
        "author": "Grant Heggie",
        "wrapper": "<div class='doc-section'></div>",
        "assets": {
            "css": []
        },
        "componentProperties": {
            "custom-class": {
                "label": "Custom Styles",
                "type": "text",
                "value": "fillitin"
            },
            "section-class": {
                "label": "Section style",
                "type": "select",
                "options": [
                    {
                        'caption': 'Multiple',
                        'value': "yes"
                    },
                    {
                        "caption": "None"
                    },
                    {
                        "caption": "First",
                        "value": "first"
                    },
                    {
                        "caption": "Container",
                        "value": "container"
                    },
                    {
                        "caption": "Container - fluid",
                        "value": "container-fluid"
                    }
                ]
            },
            "padded-styles": {
                "label": "Spacing",
                "type": "select",
                "options": [
                    {
                        'caption': 'Multiple',
                        'value': "yes"
                    },
                    {
                        "caption": "None"
                    },
                    {
                        "caption": "Padded Top",
                        'value': "pt-4"
                    },
                    {
                        "caption": "Padded Right",
                        'value': "pr-4"
                    },
                    {
                        "caption": "Padded Bottom",
                        'value': "pb-4"
                    },
                    {
                        "caption": "Padded Left",
                        'value': "pl-4"
                    },
                    {
                        "caption": "Margin Top",
                        'value': "mt-4"
                    },
                    {
                        "caption": "Margin Right",
                        'value': "mr-4"
                    },
                    {
                        "caption": "Margin Bottom",
                        'value': "mb-4"
                    },
                    {
                        "caption": "Margin Left",
                        'value': "ml-4"
                    }
                    
                ]
            },
            "column-width": {
                "label": "Width",
                "type": "select",
                "options": [
                    {
                        'caption': 'Multiple',
                        'value': "yes"
                    },
                    {
                        "caption": "None"
                    },
                    {
                        "caption": "Auto",
                        "value": "col"
                    }
                ]
            },
            "column-float": {
                "label": "Float",
                "type": "select",
                "options": [
                    {
                        'caption': 'Multiple',
                        'value': "yes"
                    },
                    {
                        "caption": "None"
                    }
                ]
            },
            'background-styles': {
                'label': 'Background',
                'type': 'select',
                'options': [
                    {
                        "caption": "None"
                    }
                ]
            },
            "text-styles": {
                "label": "Text styles",
                "type": "select",
                "options": [
                    {
                        'caption': 'Multiple',
                        'value': "yes"
                    },
                    {
                        "caption": "None"
                    },
                    {
                        'caption': 'Centered',
                        'value': "text-center"
                    },
                    {
                        'caption': 'Left',
                        'value': "text-left"
                    },
                    {
                        'caption': 'Right',
                        'value': "text-right"
                    },
                    {
                        'caption': 'Justify',
                        'value': "text-justify"
                    },
                    {
                        'caption': 'Nowrap',
                        'value': "text-nowrap"
                    },
                    {
                        'caption': 'Lead',
                        'value': "lead"
                    },
                    {
                        'caption': 'Muted',
                        'value': "text-muted"
                    },
                    {
                        'caption': 'Bold',
                        'value': "text-bold"
                    },
                    {
                        'caption': 'Small',
                        'value': "small"
                    },
                    {
                        'caption': 'Title',
                        'value': 'title'
                    }
                ]
            },
            "card-styles": {
                "label": "Background styles",
                "type": "select",
                "options": [
                    {
                        "caption": "Default"
                    },
                    {
                        "caption": "Primary",
                        "value": "card-primary"
                    },
                    {
                        "caption": "Success",
                        "value": "card-success"
                    },
                    {
                        "caption": "Info",
                        "value": "card-info"
                    },
                    {
                        "caption": "Warning",
                        "value": "card-warning"
                    },
                    {
                        "caption": "Danger",
                        "value": "card-danger"
                    }
                ]
            },
            "card-styles-other": {
                "label": "Other styles",
                "type": "select",
                "options": [
                    {
                        "caption": "Multiple",
                        "value": "yes"
                    },
                    {
                        "caption": "None"
                    },
                    {
                        "caption": "Shadow",
                        "value": "shadow"
                    },
                    {
                        "caption": "Borderless",
                        "value": "border-no"
                    },
                    {
                        "caption": "Inverse text",
                        "value": "card-inverse"
                    }
                ]
            },
            "modal-sizes": {
                "label": "Modal sizes",
                "type": "select",
                "options": [
                    {
                        "caption": "None"
                    },
                    {
                        "caption": "Full",
                        "value": "modal-full"
                    },
                    {
                        "caption": "Large",
                        "value": "modal-lg"
                    },
                    {
                        "caption": "Small",
                        "value": "modal-sm"
                    }
                ]
            },
            "modal-styles": {
                "label": "Modal styles",
                "type": "select",
                "options": [
                    {
                        "caption": "None"
                    },
                    {
                        "caption": "Fade",
                        "value": "fade"
                    }
                ]
            }
        },
        "groups": [
            {
                "label": "Headers",
                "components": [
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5"
                ]
            },
            {
                "label": "Text",
                "components": [
                    "p",
                    "quote",
                    "markdown",
                    "customhtml"
                ]
            },
            {
                "label": "Images",
                "components": [
                    "image",
                    'teaser'
                ]
            },
            {
                "label": "Embeds",
                "components": [
                    "embeddeditem"
                ]
            },
            {
                "label": "Lists",
                "components": [
                    "list-group",
                    'numbered-list-group',
                    "list-group-item"
                ]
            },
            {
                "label": "Cards",
                "components": [
                    "carddeck",
                    "card",
                    'cardblock',
                    "cardfooter"
                ]
            },
            {
                "label": "Layout",
                "components": [
                    "section",
                    "pagecontainer",
                    "row",
                    "column",
                    "main-and-sidebar",
                    "modal-wrap"
                ]
            },
            {
                "label": "Tables",
                "components": [
                    "table",
                    "headercell",
                    "tablerow",
                    "tablecell"
                ]
            }
        ],
        "defaultComponents": {
            "paragraph": "p",
            "image": "image"
        },
        "defaultContent": [
            {
                "component": "header"
            },
            {
                "component": "p"
            }
        ],
        "metadata": [
            {
                "identifier": "title",
                "type": "text",
                "matches": [
                    "h1.title",
                    "h2.title"
                ]
            },
            {
                "identifier": "description",
                "type": "text",
                "matches": [
                    "p.text"
                ]
            }
        ],
        "components": [
            {
                "name": "embeddeditem",
                "html": "<div doc-embeditem=\"object\">Select an item...\n</div>",
                "label": "Embed object"
            },
            {
                "name": "customhtml",
                "html": "<div class=\"customhtml\" doc-html=\"html\">Click to modify...\n</div>",
                "label": "HTML"
            },
            {
                "name": "markdown",
                "html": "<div class=\"customhtml js-living-markdown\" doc-html=\"html\">Click to modify...\n</div>",
                "label": "Markdown"
            },
            {
                "name": "section",
                "html": "<section class=\"page-section container\" doc-container=\"section\">\n</section>",
                "label": "Section",
                "properties": [
                    "section-class",
                    "background-styles",
                    "padded-styles",
                    "text-styles"
                ]
            },
            {
                "name": "pagecontainer",
                "html": "<div class=\"container\" doc-container=\"container\">\n</div>",
                "label": "Simple container",
                "properties": [
                    "section-class",
                    "background-styles",
                    "padded-styles",
                    "text-styles"
                ]
            },
            {
                "name": "row",
                "html": "<div class=\"row\" doc-container=\"row\">\n</div>",
                "label": "Row",
                "properties": [
                    "background-styles",
                    "padded-styles",
                    "text-styles"
                ],
                "directives": {
                    "row": {
                        "allowedChildren": [
                            "column"
                        ]
                    }
                }
            },
            {
                "name": "column",
                "html": "<div doc-container=\"column\" class=\"col\">\n</div>",
                "label": "Column",
                "allowedParents": [
                    "row"
                ],
                "properties": [
                    "background-styles",
                    "padded-styles",
                    "text-styles",
                    "column-width",
                    'column-float'
                ]
            },
            {
                "name": "card",
                "html": "<div class=\"card\" doc-container=\"card\">\n</div>",
                "label": "Card",
                "properties": [
                    "card-styles",
                    "text-styles",
                    "card-styles-other",
                    "padded-styles"
                ]
            },
            {
                "name": "cardblock",
                "html": "<div class=\"card-block\" doc-container=\"cardblock\">\n</div>",
                "label": "Card block",
                "properties": [
                    "card-styles",
                    "card-styles-other"
                ],
                "allowedParents": [
                    "card"
                ]
            },
            {
                "name": "cardfooter",
                "html": "<div class=\"card-footer\" doc-container=\"cardfooter\">\n</div>",
                "label": "Card footer",
                "allowedParents": [
                    "card"
                ]
            },
            {
                "name": "carddeck",
                "html": "<div class=\"card-deck\" doc-container=\"carddeck\">\n</div>",
                "label": "Card deck",
                "allowedParents": [
                    'column'
                ]
            },
            {
                "name": "table",
                "html": "<table><thead doc-container=\"tablehead\"></thead><tbody doc-container=\"tablebody\"></tbody></table>",
                "label": "Table",
                "properties": [
                    "background-styles",
                    "padded-styles",
                    "text-styles"
                ],
                "directives": {
                    "tablehead": {
                        "allowedChildren": [
                            "tablerow"
                        ]
                    },
                    "tablebody": {
                        "allowedChildren": [
                            "tablerow"
                        ]
                    }
                }
            },
            {
                "name": "tablerow",
                "html": "<tr doc-container=\"rowcells\"></tr>",
                "label": "Table row",
                "properties": [
                    "background-styles",
                    "padded-styles",
                    "text-styles"
                ],
                "allowedParents": [
                    "table"
                ],
                "directives": {
                    "rowcells": {
                        "allowedChildren": [
                            "tablecell",
                            "headercell"
                        ]
                    }
                }
            },
            {
                "name": "tablecell",
                "html": "<td doc-container=\"cellitems\"></td>",
                "label": "Table cell",
                "properties": [
                    "background-styles",
                    "padded-styles",
                    "text-styles"
                ],
                "allowedParents": [
                    "tablerow"
                ]
            },
            {
                "name": "headercell",
                "html": "<th doc-container=\"cellitems\"></td>",
                "label": "Table header cell",
                "properties": [
                    "background-styles",
                    "padded-styles",
                    "text-styles"
                ],
                "allowedParents": [
                    "tablerow"
                ]
            },
            {
                "name": "main-and-sidebar",
                "html": "<div class=\"row\">\n  <div class=\"col-md-8\" doc-container=\"main\"></div>\n  <div class=\"col-md-4\" doc-container=\"sidebar\"></div>\n</div>",
                "label": "Main and sidebar"
            },
            {
                "name": "h1",
                "html": "<h1 doc-editable=\"title\">\n  Title\n</h1>",
                "label": "Title H1",
                "properties": [
                    "text-styles",
                    "padded-styles"
                ]
            },
            {
                "name": "h2",
                "html": "<h2 doc-editable=\"title\">\n  Title\n</h2>",
                "label": "Title H2",
                "properties": [
                    "text-styles",
                    "padded-styles"
                ]
            },
            {
                "name": "h3",
                "html": "<h3 doc-editable=\"title\">\n  Title\n</h3>",
                "label": "Title H3",
                "properties": [
                    "text-styles",
                    "padded-styles"
                ]
            },
            {
                "name": "h4",
                "html": "<h4 doc-editable=\"title\">\n  Title\n</h4>",
                "label": "Title H4",
                "properties": [
                    "text-styles",
                    "padded-styles"
                ]
            },
            {
                "name": "h5",
                "html": "<h5 doc-editable=\"title\">\n  Title\n</h5>",
                "label": "Title H5",
                "properties": [
                    "text-styles",
                    "padded-styles"
                ]
            },
            {
                "name": "image",
                "html": "<figure>\n\
             <img doc-image=\"image\" class=\"img-fluid\">\n\
                <figcaption doc-editable=\"caption\">\n\
                Caption.\n\
                </figcaption>\n</figure>",
                "label": "Image"
            },
            {
                "name": "list-group",
                "html": "<ul class=\"list-group list-group-flush\" doc-container=\"list\"></ul>",
                "label": "List group",
                "properties": [
                    "text-styles"
                ],
                "directives": {
                    "list": {
                        "allowedChildren": [
                            "list-group-item",
                            "list-group-box-item"
                        ]
                    }
                }
            },
            {
                "name": "numbered-list-group",
                "html": "<ol class=\"list-group list-group-flush\" doc-container=\"list\"></ol>",
                "label": "Ordered List",
                "directives": {
                    "list": {
                        "allowedChildren": [
                            "list-group-item"
                        ]
                    }
                }
            },
            {
                "name": "list-group-item",
                "html": "<li class=\"list-group-item\" doc-editable=\"text\">List item</li>",
                "label": "List item",
                "properties": [
                    "text-styles"
                ],
                "allowedParents": [
                    "list-group",
                    'numbered-list-group'
                ]
            },
            {
                "name": "teaser",
                "html": "<div class=\"thumbnail\">\n  <a doc-link=\"link\" href=\"#\" class=\"no-decor\">\n    <img doc-image=\"image\">\n    <div class=\"caption\">\n      <h3 doc-editable=\"label\">Label</h3>\n      <p doc-editable=\"description\">Description</p></div>\n</a>\n</div>",
                "label": "Teaser"
            },
            {
                "name": "p",
                "html": "<p doc-editable=\"text\">Paragraph content</p>",
                "label": "Paragraph",
                "properties": [
                    'text-styles',
                    "padded-styles"
                ]
            },
            {
                "name": "quote",
                "html": "<blockquote>\n  <p>\n    <span class=\"quotation-mark\">&#x201C;</span><span class=\"quote\" doc-editable=\"text\">Quotation</span>\n  </p>\n  <div class=\"caption\" doc-editable=\"author\">Author</div>\n</blockquote>",
                "label": "Quote"
            },
            {
                "name": "modal-wrap",
                "html": "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" doc-container=\"modalwrap\" aria-hidden=\"true\">\n</div>",
                "label": "Modal wrapper",
                "properties": [
                    "modal-styles"
                ]
            },
            {
                "name": "modal-dialog",
                "html": "<div class=\"modal-dialog\" doc-container=\"modaldialog\" role=\"document\">\n </div>",
                "label": "Modal dialogue",
                "allowedParents": [
                    "modal-wrap"
                ],
                "properties": [
                    "modal-sizes"
                ]
            },
            {
                "name": "modal-body",
                "html": "<div class=\"modal-content\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">&times;</button>\n    <div class=\"modal-body\" doc-container=\"modalbody\">\n</div>\n</div>",
                "label": "Modal body"
            }
        ],
        "prefilledComponents": {
            "modal-wrap": {
                "components": {
                    "modalwrap": [
                        {
                            "identifier": "bootstrap4.modal-dialog",
                            "containers": {
                                "modaldialog": [
                                    {
                                        identifier: "bootstrap4.modal-body"
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            "table": {
                "components": {
                    "tablehead": [
                        {
                            "identifier": "bootstrap3.tablerow",
                            "containers": {
                                "rowcells": [
                                    {
                                        identifier: "bootstrap3.headercell",
                                        "containers": {
                                            "cellitems": [
                                                {
                                                    "identifier": "p"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        identifier: "bootstrap3.headercell",
                                        "containers": {
                                            "cellitems": [
                                                {
                                                    "identifier": "p"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ],
                    "tablebody": [
                        {
                            "identifier": "bootstrap3.tablerow",
                            "containers": {
                                "rowcells": [
                                    {
                                        identifier: "bootstrap3.tablecell",
                                        "containers": {
                                            "cellitems": [
                                                {
                                                    "identifier": "p"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        identifier: "bootstrap3.tablecell",
                                        "containers": {
                                            "cellitems": [
                                                {
                                                    "identifier": "p"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        },
        "structures": [
            {
                label: "Content section",
                components: [
                    {
                        "identifier": "bootstrap4.section",
                        "styles": {"section-class" : "container"},   /* key value listing */
                        "data_attributes": {'section': { 'data-sample': 'just an example'}}, /* inner-directive => { }  */
                        "containers": {
                            "section": [        // the name of the container inside the component to add to
                                {
                                    "identifier": "bootstrap4.row",
                                    "styles": {
                                        "text-styles": "text-center"
                                    },
                                    "data_attributes": {},
                                    "containers": {
                                        "row": [
                                            {
                                                "identifier": "bootstrap4.column",
                                                "data_attributes": {}
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    };
    if (typeof module !== 'undefined' && module.exports) {
        return module.exports = designJSON;
    } else {
        this.design = this.design || {};
        this.design[designJSON['name']] = designJSON;
    }
    
    // now update the design style options programmatically
    var sizeLabels = {
        'xs': 'Extra-small',
        'sm': 'Small',
        'md': 'Medium', 
        'lg': 'Large',
    };
    
    for (var screen in sizeLabels) {
        for (var i = 1; i < 13; i++) {
            var opt = {
                'caption' : sizeLabels[screen] + ' ' + i + ' wide',
                'value' : 'col-' + screen + '-' + i
            }
            designJSON.componentProperties['column-width'].options.push(opt);
            
            var pushOpt = {
                'caption': sizeLabels[screen] + ' push ' + i,
                'value': 'push-' + screen + '-' + i
            };
            var pullOpt = {
                'caption': sizeLabels[screen] + ' pull ' + i,
                'value': 'pull-' + screen + '-' + i
            };
            
            designJSON.componentProperties['column-float'].options.push(pushOpt);
            designJSON.componentProperties['column-float'].options.push(pullOpt);
        }
    }

    
}).call(this);