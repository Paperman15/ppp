import { BrokerPage } from '../../shared/broker-page.js';
import { BROKERS } from '../../shared/const.js';
import { html } from '../../shared/template.js';
import { ref } from '../../shared/element/templating/ref.js';
import { pageStyles } from './page.js';
import { search } from './icons/search.js';
import { filterCards } from '../../shared/generic-card.js';
import ppp from '../../ppp.js';

export const brokerPageTemplate = (context, definition) => html`
  <template>
    <${'ppp-page'}>
      <span slot="header">
        Брокеры
      </span>
      <${'ppp-text-field'}
        class="global-search-input"
        type="search"
        placeholder="Поиск"
        @input="${(x, c) =>
          filterCards(x.cards.children, c.event.target.value)}"
      >
        ${search({
          slot: 'end'
        })}
      </ppp-text-field>
      <div class="card-container" ${ref('cards')}>
        <${'ppp-generic-card'}>
          <img slot="logo" draggable="false" alt="Alor" style="height: 40px"
               src="static/alor.svg"/>
          <span slot="title">Alor Open API V2</span>
          <span slot="description">Торговля и рыночные данные через Alor Open API. <a
            target="_blank"
            rel="noopener"
            href="https://alor.dev/docs">Перейти к документации</a>.</span>
          <${'ppp-button'}
            slot="action"
            @click="${() =>
              ppp.app.navigate({
                page: `broker-${BROKERS.ALOR_OPENAPI_V2}`
              })}"
          >
            Продолжить
          </ppp-button>
        </ppp-generic-card>
        <ppp-generic-card>
          <img slot="logo" draggable="false" alt="Tinkoff Invest API"
               style="height: 40px"
               src="static/tinkoff.svg"/>
          <span slot="title">Tinkoff Invest API</span>
          <span slot="description">Торговля и рыночные данные через Tinkoff Invest API. <a
            target="_blank"
            rel="noopener"
            href="https://tinkoff.github.io/investAPI">Перейти к документации</a>.</span>
          <${'ppp-button'}
            slot="action"
            @click="${() =>
              ppp.app.navigate({
                page: `broker-${BROKERS.TINKOFF_INVEST_API}`
              })}"
          >
            Продолжить
          </ppp-button>
        </ppp-generic-card>
        <ppp-generic-card>
          <img slot="logo" draggable="false" alt="UTEX Aurora"
               style="height: 32px"
               src="static/utex.svg"/>
          <span slot="title">UTEX Aurora</span>
          <span slot="description">Рыночные данные от UTEX Aurora. <a
            target="_blank"
            rel="noopener"
            href="https://utex.io/aurora">Официальный ресурс</a>.</span>
          <${'ppp-button'}
            slot="action"
            @click="${() =>
              ppp.app.navigate({
                page: `broker-${BROKERS.UTEX_AURORA}`
              })}"
          >
            Продолжить
          </ppp-button>
        </ppp-generic-card>
        <ppp-generic-card>
          <img slot="logo" draggable="false" alt="Binance"
               style="height: 40px;"
               src="static/binance.svg"/>
          <span slot="title">Binance</span>
          <span slot="description">Торговля и рыночные данные криптобиржи Binance. <a
            target="_blank"
            rel="noopener"
            href="https://www.binance.com/">Официальный ресурс</a>.</span>
          <${'ppp-button'}
            slot="action"
            @click="${() =>
              ppp.app.navigate({
                page: `broker-${BROKERS.BINANCE}`
              })}"
          >
            Продолжить
          </ppp-button>
        </ppp-generic-card>
        <ppp-generic-card>
          <img slot="logo" draggable="false" alt="Psina"
               style="height: 90%; opacity: .95"
               src="static/psina.png"/>
          <span slot="title">Psina</span>
          <span slot="description">Рыночные данные проекта Psina. <a
            target="_blank"
            rel="noopener"
            href="https://t.me/pantini_group">Официальная группа</a>.</span>
          <${'ppp-button'}
            disabled
            slot="action"
            @click="${() =>
              ppp.app.navigate({
                page: `broker-${BROKERS.PSINA}`
              })}"
          >
            Продолжить
          </ppp-button>
        </ppp-generic-card>
      </div>
      <span slot="actions"></span>
    </ppp-page>
  </template>
`;

// noinspection JSUnusedGlobalSymbols
export default BrokerPage.compose({
  template: brokerPageTemplate,
  styles: pageStyles
});
