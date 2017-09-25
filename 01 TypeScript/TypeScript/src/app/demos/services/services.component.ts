import { Voucher } from '../../shared/model/model';
import { IClickCallback, VoucherService, GenericService } from './voucher.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    usingPromises() {

        function doAsyncTask(succeed: boolean): Promise<string> {
            return new Promise<string>((resolve, reject) => {
                setTimeout(() => {
                    console.log("Async Task Complete");
                    if (succeed) {
                        resolve("Outcome: Promise resolved");
                    } else {
                        reject("Outcome: Promise rejected");
                    }
                }, 1000);
            });
        }

        doAsyncTask(true).then((msg) => {
            console.log(msg);
        });
    }

    consumeService() {
        debugger;

        var service = new VoucherService();
        service.getVouchers().then((data: Voucher[]) => {
            console.log('data from VoucherService')
            console.log(data);
        });
    }

    consumeGenericService() {
        debugger;

        let res: GenericService<Voucher> = new GenericService<Voucher>("/api/vouchers/");

        res.getItems().done((data: Voucher[]) => {
            let vs: Voucher[] = data;
            console.log("Data received from Ressource");
            console.log(JSON.stringify(vs));
        });
    }

    usingFetchAwait() {

        async function getAllVouchers() {
            let response = await fetch("./assets/vouchers.json");
            let voucher = await response.json();
            console.log("Data received using fetch - await");
            console.log(voucher);
        }

        getAllVouchers();
    }
}
