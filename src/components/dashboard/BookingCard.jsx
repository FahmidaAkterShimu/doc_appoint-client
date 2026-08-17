import { Button } from '@heroui/react';

const BookingCard = ({ booking, onUpdate, onDelete }) => {
    return (
        <div className='bg-background rounded-2xl border border-border shadow-sm p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>

            <div className='flex-1'>

                <div className='flex items-center gap-2 mb-1'>
                    <h3 className='font-semibold text-foreground'>
                        {booking.doctorName}
                    </h3>

                    <span className='text-xs bg-teal-50 text-teal-700 border border-teal-100 px-2 py-0.5 rounded-full font-medium'>
                        Confirmed
                    </span>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2'>

                    <div>
                        <p className='text-xs text-slate-400'>
                            Patient
                        </p>

                        <p className='text-sm font-medium text-slate-700'>
                            {booking.patientName}
                        </p>
                    </div>

                    <div>
                        <p className='text-xs text-slate-400'>
                            Date
                        </p>

                        <p className='text-sm font-medium text-slate-700'>
                            {booking.appointmentDate}
                        </p>
                    </div>

                    <div>
                        <p className='text-xs text-slate-400'>
                            Time
                        </p>

                        <p className='text-sm font-medium text-slate-700'>
                            {booking.timeSlot}
                        </p>
                    </div>

                    <div>
                        <p className='text-xs text-slate-400'>
                            Phone
                        </p>

                        <p className='text-sm font-medium text-slate-700'>
                            {booking.phone}
                        </p>
                    </div>

                </div>
            </div>

            <div className='flex gap-2 shrink-0'>

                <Button
                    onPress={() => onUpdate(booking)}
                    className='px-4 py-2 text-sm font-semibold text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors'
                >
                    Update
                </Button>

                <Button
                    onPress={() => onDelete(booking)}
                    className='px-4 py-2 text-sm font-semibold text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors'
                >
                    Delete
                </Button>

            </div>
        </div>
    );
};

export default BookingCard;