import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():null// typescript büyük küçük harf duyarlı
    // olduğu için aranacak bilgi girilince hemen küçük harfe çevir demek.
    //filterText? arama input ta aranacak karakter varmı yani alan dolu mu demek.
    // filterText? arama input ta aranacak string yoksa null değer döndür yani hepsini göster.

    return filterText?value.filter((p:Product)=>p.name
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
    // filterText?value filterText alanında string girilmişse
    //.filter((p:Product)=>p.name.toLocaleLowerCase):value ürün adı name alanını küçük harfe çevir 
    // veri tabanında bul ve listeletoLocaleLowerCase):value;
    //
  }

}
