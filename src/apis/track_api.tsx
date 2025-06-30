// src/apis/track_api.ts

export interface ApiResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ShipmentHistory {
  timestamp: string;
  location: string;
  status: string;
  message: string;
}

export interface BookedShipment {
  trackingId: string;
  userId: string;
  status: string;
  origin: string;
  destination: string;
  senderName: string;
  receiverName: string;
  bookingDate: string;
  expectedDeliveryDate?: string;
  history: ShipmentHistory[];
  courierPartnerTrackingId?: string;
}

/**
 * Mock API function to simulate shipment tracking.
 * Replace with your actual API call.
 */
export async function trackShipment(
  trackingId: string
): Promise<ApiResult<BookedShipment | string>> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock data for demo — you can replace this with real API logic
  if (trackingId === "HH123456789") {
    const mockShipment: BookedShipment = {
      trackingId,
      userId: "user123",
      status: "In Transit",
      origin: "New York, NY",
      destination: "San Francisco, CA",
      senderName: "John Doe",
      receiverName: "Jane Smith",
      bookingDate: "2023-06-20T10:00:00Z",
      expectedDeliveryDate: "2023-06-27T18:00:00Z",
      history: [
        {
          timestamp: "2023-06-20T12:00:00Z",
          location: "New York, NY",
          status: "Booked",
          message: "Shipment booked successfully.",
        },
        {
          timestamp: "2023-06-21T09:30:00Z",
          location: "Newark, NJ",
          status: "Picked Up",
          message: "Shipment picked up by courier.",
        },
        {
          timestamp: "2023-06-22T15:00:00Z",
          location: "Pittsburgh, PA",
          status: "In Transit",
          message: "Shipment is in transit.",
        },
      ],
    };

    return { success: true, data: mockShipment };
  }

  // If trackingId not found, simulate external tracking info as string
  if (trackingId.startsWith("EXT")) {
    return {
      success: true,
      data: `External tracking data for shipment ID: ${trackingId}`,
    };
  }

  // Simulate not found error
  return { success: false, error: "Tracking number not found." };
}
