// pages/property/[id].tsx
import { useParams } from 'next/navigation'
import PropertyDetail from '@/components/property/PropertyDetail'
import BookingSection from '@/components/property/BookingSection'
import ReviewSection from '@/components/property/ReviewSection'

export default function PropertyPage() {
  const params = useParams()
  const propertyId = params?.id

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Property Detail */}
      <section className="mb-8">
        <PropertyDetail propertyId={propertyId} />
      </section>

      {/* Responsive 2-column layout: Booking & Reviews */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <ReviewSection propertyId={propertyId} />
        </div>

        <aside className="md:col-span-1">
          <BookingSection propertyId={propertyId} />
        </aside>
      </section>
    </main>
  )
}
