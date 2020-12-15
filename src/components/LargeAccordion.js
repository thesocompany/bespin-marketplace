import React, { useState } from 'react'
import classnames from 'classnames'

// interface AccordionItem {
//   title: React.ReactNode | string
//   content: React.ReactNode
//   expanded: boolean
//   id: string
//   className?: string
//   toggleItem?: (event: React.MouseEvent<HTMLButtonElement>) => void
// }

// interface AccordionProps {
//   bordered?: boolean
//   items: AccordionItem[]
//   className?: string
// }

export function LargeAccordionItem(props) {
    const { title, id, content, expanded, className, handleToggle, image, icon } = props

    const headingClasses = classnames('usa-accordion__heading', className, )
    const contentClasses = classnames(
        'usa-accordion__content',
        'usa-prose',
        className
    )

    return (
        <>
            <div className="margin-top-0" >
            <h2 className={headingClasses} >
                <button
                    style={{height: "169px"}}
                    id={id}
                    type="button"
                    className="usaf-large-accordion__button"
                    aria-expanded={expanded}
                    aria-controls={id}
                    data-testid={`accordionButton_${id}`}
                    onClick={handleToggle}>  
                    {
                      <div className="grid-container">
                        <div className="grid-row">
                                <div className="grid-col-3 padding-right-5" style={{ width: "215px" }}>{title}</div>
                          <div className="grid-col-auto"><div className="">{icon}</div></div>
                          <div className="grid-col-4">{image}</div>
                        </div>
                      </div>
                    }
                    {/* {title} */}
                </button>
            </h2>
            <div
                // id={id}
                data-testid={`accordionItem_${id}`}
                id={`accordion-body_${id}`}
                className={contentClasses}
                hidden={!expanded}>
                {content}
                </div>
          </div>
        </>
    )
}

export function LargeAccordion(props) {
    const { bordered, items, className } = props

    const [openItems, setOpenState] = useState(
        items.filter((i) => !!i.expanded).map((i) => i.id)
    )

    const classes = classnames(
        'usa-accordion',
        {
            'usa-accordion--bordered': bordered,
        },
        className
    )

    function toggleItem(itemId) {
        const newOpenItems = [...openItems]
        const itemIndex = openItems.indexOf(itemId)

        if (itemIndex > -1) {
            newOpenItems.splice(itemIndex, 1)
        } else {
            newOpenItems.push(itemId)
        }
        setOpenState(newOpenItems)
    }

    return (
        <div className={classes} data-testid="accordion">
            {items.map((item, i) => (
                <LargeAccordionItem
                    key={`accordionItem_${i}`}
                    {...item}
                    expanded={openItems.indexOf(item.id) > -1}
                    handleToggle={() => {
                        toggleItem(item.id)
                    } } />
            ))}
        </div>
    )
}

export default LargeAccordion