# frozen_string_literal: true

require "rest-client"
require "json"

class ExchangeService
  def initialize(source_currency, target_currency, amount)
    @source_currency = source_currency
    @target_currency = target_currency
    @amount = amount.to_f
  end

  def call
    value = get_exchange
    value * @amount
  rescue RestClient::ExceptionWithResponse => e
    e.response
  end

  private

  def get_exchange
    exchange_api_url = Rails.application.credentials[:currency_api_url]
    exchange_api_key = Rails.application.credentials[:currency_api_key]
    
    url_api = "#{exchange_api_url}?token=#{exchange_api_key}&currency=#{@source_currency}/#{@target_currency}"
    
    response = RestClient.get url_api
    JSON.parse(response.body)["currency"][0]["value"].to_f
  end
end
