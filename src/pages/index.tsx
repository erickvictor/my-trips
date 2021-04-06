import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '2',
          name: 'Reykjavik',
          slug: 'reykjavik',
          location: {
            latitude: 64.147598,
            longitude: -21.945637
          }
        }
      ]}
    />
  )
}
