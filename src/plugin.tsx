import React, {useCallback, useEffect, useState} from 'react'
//@ts-expect-error missing types
import getIt from 'get-it'
//@ts-expect-error missing types
import jsonResponse from 'get-it/lib/middleware/jsonResponse'
//@ts-expect-error missing types
import promise from 'get-it/lib/middleware/promise'
import {Button, Card, Code} from '@sanity/ui'
import styled from 'styled-components'
import {DashboardWidgetContainer, DashboardWidget, LayoutConfig} from '@sanity/dashboard'
const request = getIt([promise(), jsonResponse()])

const Image = styled.img`
  display: block;
  width: 100%;
`

function Cats() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | undefined>()
  const [imageUrl, setImageUrl] = useState<string | undefined>()

  const getCat = useCallback(() => {
    setIsLoading(true)
    request({
      url: 'https://api.thecatapi.com/v1/images/search',
    })
      .then((response: {body: {url: string}[]}) => {
        setImageUrl(response.body[0].url)
      })
      .catch((e: Error) => setError(e))
      .finally(() => setIsLoading(false))
  }, [setError, setIsLoading])

  useEffect(() => {
    getCat()
  }, [getCat])

  return (
    <DashboardWidgetContainer
      header="A cat"
      footer={
        <Button
          style={{width: '100%'}}
          paddingX={2}
          paddingY={4}
          mode="bleed"
          tone="primary"
          text="Get new cat"
          loading={isLoading}
          onClick={getCat}
        />
      }
    >
      {error && (
        <Card paddingX={3} paddingY={4} tone="critical">
          <Code>{JSON.stringify(error, null, 2)}</Code>
        </Card>
      )}
      {!error && (
        <figure>
          <Image src={imageUrl} />
        </figure>
      )}
    </DashboardWidgetContainer>
  )
}

export function catsWidget(config: {layout?: LayoutConfig} = {}): DashboardWidget {
  return {
    name: 'cats-widget',
    component: Cats,
    layout: config.layout ?? {width: 'medium'},
  }
}
