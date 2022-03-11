import { Inject, ScheduleComponent, Day, Week, Month, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';


export default function Schedule() {
    return (

        <div>            
            < div style={{
                "width": "80%", "height": "70%", "float": "right"
            }}>
                <ScheduleComponent currentView='Month'>
                    <ViewsDirective>
                        <ViewDirective option='Day'></ViewDirective>
                        <ViewDirective option='Week'></ViewDirective>
                        <ViewDirective option='Month'></ViewDirective>
                    </ViewsDirective>
                    <Inject services={[Day, Week, Month]} />
                </ScheduleComponent>
            </div >
        </div>
    );
}