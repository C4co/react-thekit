import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { Carousel } from './Carousel'
import Image from 'next/image'

function MyImage({ src }: any) {
  return (
    <Image
      key={111}
      width={600}
      height={450}
      placeholder="blur"
      blurDataURL={src}
      alt="image"
      objectFit="cover"
      src={src}
    />
  )
}

describe('<Carrousel /> component', () => {
  test('check init render', async () => {
    const { getByTestId, queryByTestId, getAllByTestId } = render(
      <Carousel
        dots
        items={[
          <MyImage
            key={111}
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2568&q=80"
          />,

          <MyImage
            key={222}
            src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
          />,

          <MyImage
            key={333}
            src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          />,
        ]}
      />
    )

    expect(getByTestId('carousel')).toBeInTheDocument()
    expect(getByTestId('carousel')).toBeVisible()

    expect(getByTestId('carousel-content')).toBeInTheDocument()
    expect(getByTestId('carousel-content')).toBeVisible()

    expect(getByTestId('carousel-button-right')).toBeInTheDocument()

    await waitFor(() => {
      expect(getByTestId('carousel-button-right')).toBeVisible()
    })

    expect(queryByTestId('carousel-button-left')).not.toBeInTheDocument()

    expect(getAllByTestId('carousel-item').length).toBe(3)

    getAllByTestId('carousel-item').map(item => {
      expect(item).toBeInTheDocument()
      expect(item).toBeVisible()
    })

    expect(getByTestId('carousel-dots')).toBeInTheDocument()
  })
})
