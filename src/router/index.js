import {createRouter, createWebHistory} from 'vue-router';
import index from '../views/pages/dashboard/index'
import aboutus from '../views/pages/pages/aboutus/index'
import Blogs from '../views/pages/blogs/blogdetails/index'
import BlogsGrid from '../views/pages/blogs/blog-grid/index'
import BlogsList from '../views/pages/blogs/blog-list/index'
import booking from '../views/pages/pages/booking/index'
import bookingwallet from '../views/pages/pages/booking-wallet/index'
import changepassword from '../views/pages/pages/auth/change-password/index'
import Forgotpassword from '../views/pages/pages/auth/forgot-password/index'
import contactUs from '../views/pages/pages/contact-us/index'
import ExamDetail from '../views/pages/guide/exam-details/index'
import ExamResults from '../views/pages/guide/exam-results/index'
import Guideavailability from '../views/pages/guide/guide-availability/index'
import Guideboonkings from '../views/pages/guide/guide-bookings/index'
import Guidechatcontent from '../views/pages/guide/guide-chat/index'
import GuideDashboard from '../views/pages/TechPanel/tech-dashboard/index'
import GuideDetails from '../views/pages/guide/guide-details/index'
import Guidelist from '../views/pages/guide/guide-list/index'
import Guidenotification from '../views/pages/TechPanel/tech-notification/index'
import Guidepayment from '../views/pages/guide/guide-payment/index'
import Guidereview from '../views/pages/guide/guide-reviews/index'
import Guidesettings from '../views/pages/guide/guide-settings/index'
import Guidesubscription from '../views/pages/guide/guide-subscription/index'
import Guidewallet from '../views/pages/guide/guide-wallet/index'
import Guidewithdrawn from '../views/pages/guide/guide-withdrawn/index'
import Howitwork from '../views/pages/pages/how-it-works'
import IndexDashboard from '../views/pages/dashboard/index'
import privacypolicy from '../views/pages/pages/privacy-policy'
import services from '../views/pages/pages/services'
import login from '../views/pages/pages/auth/login'
import register from '../views/pages/pages/auth/register'
import usersbookings from '../views/pages/users/user-bookings/index.vue'
import userchat from '../views/pages/users/user-chat/index.vue'
import userdashboard from '../views/pages/users/user-dashboard/index.vue'
import usernotification from '../views/pages/users/user-notification/index.vue'
import userpayment from '../views/pages/users/user-payment/index.vue'
import userreviews from '../views/pages/users/user-reviews/index.vue'
import usersettings from '../views/pages/users/user-settings/index.vue'
import userwallet from '../views/pages/users/user-wallet/index.vue'
import Termscondition from '../views/pages/pages/termscondition.vue'
import Stepwizard from '../views/pages/pages/stepwizard/index'
import TechCandidate from '../views/pages/techcandidate/tech-candidate/formspage/index'



const routes = [
    {
        path: '/techcandidate',
        name: 'techcandidate',
        component: () => import('../views/pages/techcandidate/tech-candidate/formspage/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/stepwizard',
        name: 'stepwizard',
        component: () => import('../views/pages/pages/stepwizard/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/pages/pages/auth/login/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/',
        name: 'index',
        component: () => import('../views/pages/dashboard/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: () => import('../views/pages/pages/aboutus/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/blog-details',
        name: 'blog-details',
        component: () => import('../views/pages/blogs/blogdetails/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/blog-grid',
        name: 'blog-grid',
        component: () => import('../views/pages/blogs/blog-grid/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/blog-list',
        name: 'blog-list',
        component: () => import('../views/pages/blogs/blog-list/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/booking',
        name: 'booking',
        component: () => import('../views/pages/pages/booking/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/booking-wallet',
        name: 'booking-wallet',
        component: () => import('../views/pages/pages/booking-wallet/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/change-password',
        name: 'change-password',
        component: () => import('../views/pages/pages/auth/change-password/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: () => import('../views/pages/pages/contact-us/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/exam-details',
        name: 'exam-details',
        component: () => import('../views/pages/guide/exam-details/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/exam-results',
        name: 'exam-results',
        component: () => import('../views/pages/guide/exam-results/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../views/pages/pages/auth/forgot-password/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/guide-availability',
        name: 'guide-availability',
        component: () => import('../views/pages/guide/guide-availability/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/guide-bookings',
        name: 'guide-bookings',
        component: () => import('../views/pages/guide/guide-bookings/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/guide-chat',
        name: 'guide-chat',
        component: () => import('../views/pages/guide/guide-chat/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/tech-dashboard',
        name: 'tech-dashboard',
        component: () => import('../views/pages/TechPanel/tech-dashboard/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/guide-details',
        name: 'guide-details',
        component: () => import('../views/pages/guide/guide-details/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/guide-list',
        name: 'guide-list',
        component: () => import('../views/pages/guide/guide-list/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/tech-notification',
        name: 'tech-notification',
        component: () => import('../views/pages/TechPanel/tech-notification/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/guide-payment',
        name: 'guide-payment',
        component: () => import('../views/pages/guide/guide-payment/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/guide-reviews',
        name: 'guide-reviews',
        component: () => import('../views/pages/guide/guide-reviews/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/guide-settings',
        name: 'guide-settings',
        component: () => import('../views/pages/guide/guide-settings/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/guide-subscription',
        name: 'guide-subscription',
        component: () => import('../views/pages/guide/guide-subscription/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/guide-wallet',
        name: 'guide-wallet',
        component: () => import('../views/pages/guide/guide-wallet/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/guide-withdrawn',
        name: 'guide-withdrawn',
        component: () => import('../views/pages/guide/guide-withdrawn/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/how-it-works',
        name: 'how-it-works',
        component: () => import('../views/pages/pages/how-it-works'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: () => import('../views/pages/pages/privacy-policy'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('../views/pages/pages/services'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/pages/pages/auth/register'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/user-bookings',
        name: 'user-bookings',
        component: () => import('../views/pages/users/user-bookings/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/user-chat',
        name: 'user-chat',
        component: () => import('../views/pages/users/user-chat/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/user-dashboard',
        name: 'user-dashboard',
        component: () => import('../views/pages/users/user-dashboard/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/user-notification',
        name: 'user-notification',
        component: () => import('../views/pages/users/user-notification/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/user-payment',
        name: 'user-payment',
        component: () => import('../views/pages/users/user-payment/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/user-reviews',
        name: 'user-reviews',
        component: () => import('../views/pages/users/user-reviews/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/user-settings',
        name: 'user-settings',
        component: () => import('../views/pages/users/user-settings/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/user-wallet',
        name: 'user-wallet',
        component: () => import('../views/pages/users/user-wallet/index'),
        meta: {
        requiresAuth: true
    }
    },
    {
        path: '/term-condition',
        name: 'term-condition',
        component: () => import('../views/pages/pages/termscondition'),
        meta: {
        requiresAuth: true
    }
    },
];
export const router = createRouter({
    history: createWebHistory('tamircity'),
    linkActiveClass: 'active',
    routes
});