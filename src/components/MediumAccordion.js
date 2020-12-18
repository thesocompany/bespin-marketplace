import React, { useState } from 'react'
import classnames from 'classnames'

export function MediumAccordionItem(props) {
    const { title, id, content, expanded, className, handleToggle, description, icon } = props

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
                    // style={{height: "169px"}}
                    id={id}
                    type="button"
                    className="usaf-medium-accordion__button"
                    aria-expanded={expanded}
                    aria-controls={id}
                    data-testid={`accordionButton_${id}`}
                    onClick={handleToggle}>  
                    {
                      <div className="grid-container padding-left-0 padding-right-0">
                        <div className="grid-row">
                          <div className="grid-col-auto">{icon}</div>
                          <div className="grid-col-4">{title}</div>
                          <div className="grid-col-4">{description}</div>
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

export function MediumAccordion(props) {
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
                <MediumAccordionItem
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

export default MediumAccordion