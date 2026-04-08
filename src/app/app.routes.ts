import { Routes } from '@angular/router';
import { HomeComponent } from './Component/Home/home/home.component';
import { AboutUsComponent } from './Component/About/about-us/about-us.component';
import { HeroSectionComponent } from './Component/Products/hero-section/hero-section.component';
import { TermsAndConditionsComponent } from './Component/Core/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './Component/Core/privacy-policy/privacy-policy.component';
import { ReturnAndRefundPolicyComponent } from './Component/Core/return-and-refund-policy/return-and-refund-policy.component';
import { FaqComponent } from './Component/Core/faq/faq.component';
import { CheckoutLayoutComponent } from './Component/Checkout/checkout-layout/checkout-layout.component';
import { ProductComponent } from './Component/Product-details/product/product.component';
import { WishlistComponent } from './Component/Wishlist/wishlist/wishlist.component';
import { CartComponent } from './Component/Cart/cart/cart.component';
import { ContactComponent } from './Component/Contact-us/contact/contact.component';
import { AdminDetailsComponent } from './Component/Admin/admin-details/admin-details.component';
import { SetPriceComponent } from './Component/Admin/set-price/set-price.component';
import { ProductsComponent } from './Component/Admin/products/products.component';
import { ProductDetailsComponent } from './Component/Admin/product-details/product-details.component';
import { BlogComponent } from './Component/Blogs/blog/blog.component';
import { BlogDetailsComponent } from './Component/Blogs/blog-details/blog-details.component';
import { AdminAuthComponent } from './Component/Admin/admin-auth/admin-auth.component';
import { AccountComponent } from './Component/User/account/account.component';
import { ProfileComponent } from './Component/User/profile/profile.component';
import { OrdersComponent } from './Component/User/orders/orders.component';
import { UserCartComponent } from './Component/User/user-cart/user-cart.component';
import { UserWishlistComponent } from './Component/User/user-wishlist/user-wishlist.component';
import { AddressComponent } from './Component/User/address/address.component';

export const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full', data: { hideLayout: false }},
   { path: 'home', component: HomeComponent, data: { hideLayout: false }},
   { path: 'about-us', component: AboutUsComponent, data: { hideLayout: false }},
   { path: 'products', component: HeroSectionComponent, data: { hideLayout: false }},
   { path: 'product-details', component: ProductComponent, data: { hideLayout: false }},
   { path: 'terms-and-conditions', component: TermsAndConditionsComponent, data: { hideLayout: false }},
   { path: 'privacy-policy', component: PrivacyPolicyComponent, data: { hideLayout: false }},
   { path: 'return-and-refund-policy', component: ReturnAndRefundPolicyComponent, data: { hideLayout: false }},
   { path: 'faq', component: FaqComponent, data: { hideLayout: false }},
   { path: 'checkout', component: CheckoutLayoutComponent, data: { hideLayout: false }},
   { path: 'wishlist', component: WishlistComponent, data: { hideLayout: false }},
   { path: 'cart', component: CartComponent, data: { hideLayout: false }},
   { path: 'contact-us', component: ContactComponent, data: { hideLayout: false }},
   { path: 'admin', component: AdminAuthComponent, data: { hideLayout: true }},
   { path: 'admin/business-details', component: AdminDetailsComponent, data: { hideLayout: true }},
   { path: 'admin/set-price', component: SetPriceComponent, data: { hideLayout: true }},
   { path: 'admin/products', component: ProductsComponent, data: { hideLayout: true }},
   { path: 'admin/product-details', component: ProductDetailsComponent, data: { hideLayout: true }},
   { path: 'blogs', component: BlogComponent, data: { hideLayout: false }},
   { path: 'blogs/blog-details', component: BlogDetailsComponent, data: { hideLayout: false }},
  {
    path: 'user', component: AccountComponent, data: { hideLayout: false },
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'address', component: AddressComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'cart', component: UserCartComponent },
      { path: 'wishlist', component: UserWishlistComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' }
    ]
  }
]
